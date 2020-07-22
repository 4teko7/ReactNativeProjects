import React, { useState } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

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
    const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoise));

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Hr style={{width:"60%"}}/>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={{width:"90%"}}>
                <MyButton buttons={[<Button title="LOWER" color={colors.accent} onPress={() => {}} />,<Button title="GREATER" color={colors.primary} onPress={() => {}} />]} />
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