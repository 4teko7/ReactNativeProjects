import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import InputCard from '../components/InputCard';
import Card from '../components/Card';
import colors from '../constants/color';
import Input from "../components/Input";

const StartGameScreen = props => {
    const [enteredValue,setEnteredValue] = useState("");
    
    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''))
    }

    return (
        <View style = {styles.screen}>
            <Card style={{marginVertical:10, padding:0,backgroundColor:colors.cardBack}}>
                <View style = {styles.titleView}>
                    <Text style={styles.title}>Start a New Game</Text>
                </View>
            </Card>
            <Card style={{backgroundColor:colors.cardBack}}>
                <View style={styles.inputContainer}>
                    <Input
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    placeholder = "Select a Number"
                    placeholderTextColor = {colors.placeHolder}
                    // style = {{ width:"%80"}}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={colors.accent} onPress={() => {}} /></View>
                    <View style={styles.button}><Button title="Confirm" color={colors.primary} onPress={() => {}} /></View>
                </View>
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        padding:10,
        // backgroundColor: "grey"
    },
    titleView: {
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: "100%",
        maxWidth: "100%",
        alignItems: "center",
    },
    selectNumber: {
        
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        // paddingHorizontal: 15,
        marginTop:15
    },
    button: {
        width:100
    }
});


export default StartGameScreen;
