import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import InputCard from '../components/InputCard';

const StartGameScreen = props => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.titleView}>
                <Text style={styles.title}>Start a New Game</Text>
            </View>
            <InputCard />
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
    }
});


export default StartGameScreen;
