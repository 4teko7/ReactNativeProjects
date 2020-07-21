import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import InputCard from '../components/InputCard';
import Card from '../components/Card';
import colors from '../constants/color';

const StartGameScreen = props => {
    return (
        <View style = {styles.screen}>
            <Card style={{marginVertical:10, padding:0,backgroundColor:colors.cardBack}}>
                <View style = {styles.titleView}>
                    <Text style={styles.title}>Start a New Game</Text>
                </View>
            </Card>
            <Card style={{backgroundColor:colors.cardBack}}>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput} 
                    placeholder="Select a Number"
                    placeholderTextColor={colors.placeHolder}
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
    textInput: {
        borderBottomColor: "green",
        borderBottomWidth: 1,
        width:"80%",
        paddingTop:10,
        fontSize:20,
        textAlign: "center"
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
