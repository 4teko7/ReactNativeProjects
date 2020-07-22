import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//Components
import Hr from "../components/Hr";
import Card from '../components/Card';

const GameOverScreen = props => {
    const { numberOfRounds, userNumber } = props;

    return (
        <View style = {styles.screen}>
            <Card>
                <Text>The Game is over</Text>
                <Hr style={{width:100}} />
                <Text>The Number Was : {userNumber}</Text>
                <Text>Number Of Rounds : {numberOfRounds}</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width:"100%",
        height:"100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default GameOverScreen;