import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.titleView}>
                <Text style={styles.title}>Start a New Game</Text>
            </View>
            <View style={styles.titleInputAndButtonsView}>
                <View style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <TextInput style={styles.textInput} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        padding:10,
        // backgroundColor: "grey"
    },
    titleInputAndButtonsView: {
         //Shadow Property Works On Only IOS.
         shadowColor: "black", //"rgba(0,0,0,1)"
         shadowOffset: { width:0, height:2 },
         shadowRadius: 6,
         shadowOpacity: 0.26,
         backgroundColor: "white",
         //Elevation works on only Android
         elevation: 12,
         padding:10,
         paddingBottom:15,
         borderRadius: 10
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
    textInput: {
        borderBottomColor: "green",
        borderBottomWidth: 1,
        width:"40%",
        paddingTop:10
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});


export default StartGameScreen;
