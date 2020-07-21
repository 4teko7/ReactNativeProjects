import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import InputCard from '../components/InputCard';
import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style = {styles.screen}>
            <Card style={{marginVertical:10, padding:0,backgroundColor:"#03fcc6"}}>
                <View style = {styles.titleView}>
                    <Text style={styles.title}>Start a New Game</Text>
                </View>
            </Card>
            <Card style={{backgroundColor:"#03fcc6"}}>
                <View style={styles.inputContainer}>
                    <Text style={styles.selectNumber}>Select a Number</Text>
                    <TextInput style={styles.textInput} />
                    
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color="#c717fc" onPress={() => {}} /></View>
                    <View style={styles.button}><Button title="Confirm" color="#f7287b" onPress={() => {}} /></View>
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
        width:"40%",
        paddingTop:10
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
