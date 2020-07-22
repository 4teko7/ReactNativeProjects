import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//Components
import Hr from "../components/Hr";
import Card from '../components/Card';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
import MyTitle from '../components/MyTitle';

const GameOverScreen = props => {
    const { numberOfRounds, userNumber } = props;

    return (
        <View style = {styles.screen}>
            <Card style={styles.card}>
                <MyTitle title={"The Game is over"}/>
                <Hr style={{width:"60%",marginBottom:10}} />
                <MyText text={`The Number Was : ${userNumber}`} />
                <MyText text={`Number Of Rounds : ${numberOfRounds}`} />
            </Card>
            <MyButton parentViewStyle={styles.newGameButtonView} buttons = {[<Button title="New Game" onPress={() => props.onRestartGame()} />]} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop:10,
        justifyContent: "center",
        alignItems: "center",
        height:"50%"
    },
    card: {
        width:"90%",
        elevation:20,
        height:"50%"
    },
    newGameButtonView: {
        elevation: 12,
        paddingTop:25,
        paddingBottom:13,
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center",
        width:"40%"
    }
});

export default GameOverScreen;