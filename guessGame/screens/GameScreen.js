import React, { useState, useRef,useEffect } from 'react';
import { View, Text, StyleSheet,Button, Alert } from 'react-native';

//Components
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MyButton from '../components/MyButton';
import Hr from '../components/Hr';

//Constants
import colors from '../constants/color';

const generateRandomBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumber === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return randomNumber;
    }
};

const GameScreen = props => {
    const {userChoice,onGameOver} = props;

    const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,10,userChoice));
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1); //useRef will keep the number and when this number changes, the screen will not re render.
    const currentHigh = useRef(10);

    

    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(rounds);
        }
    }, [currentGuess,userChoice,onGameOver]); //This effect will only run when currentGuess changes. Variables inside array are dependencies of useEffects.

    const nextGameHandler = direction => {
        if((direction === "lower" && currentGuess < userChoice) || (direction === "greater" && currentGuess > userChoice )){
            Alert.alert("Don\'t Lie !","You know that this is wrong...",[{ext: "Sorry!",style:"cancel"}]);
            return;
        }
        if(direction === "lower"){
            currentHigh.current = currentGuess;
        }else if(direction === "greater"){
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(prevRounds => prevRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Hr style={{width:"60%"}}/>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={{width:"90%"}}>
                <MyButton buttons={[<Button title="LOWER" color={colors.accent} onPress={nextGameHandler.bind(this,"lower")} />,<Button title="GREATER" color={colors.primary} onPress={nextGameHandler.bind(this,"greater")} />]} />
            </Card>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        padding:10,
        alignItems:"center"
    }
});



export default GameScreen;