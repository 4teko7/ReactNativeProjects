import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
    } from 'react-native';

//Components
import InputCard from '../components/InputCard';
import Card from '../components/Card';
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Hr from "../components/Hr";
import MyButton from "../components/MyButton";

//Constants
import colors from '../constants/color';


const StartGameScreen = props => {
    const [enteredValue,setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''))
    }

    const resetInputHandler = () =>{
        setEnteredValue("");
        setConfirmed(false);
    }

    const confirmInputHandler = () =>{
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99 || isNaN(enteredValue) || enteredValue === ""){
            Alert.alert("Invalid Number !","Number has to be between 0 and 100",[{text:"Okay",style:"destructive",onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
    };

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = selectedNumber ? (
        <Card style={{marginVertical:10, padding:5, backgroundColor:colors.cardBack}}>
            <Text style={{textAlign: "center",fontSize:22}}>Chosen Number</Text>
            <Hr style={{width:"60%"}} />
            <NumberContainer>
                {selectedNumber}
            </NumberContainer>
            <MyButton />
            
        </Card>

        ) : <Text></Text>;
    }
// TouchableWithoutFeedback => When you click somewhere otherthan keyboard, keyboard disappears
// Card => My Custom Card Component
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
         }}> 
            <View style = {styles.screen}>
                <Card style={styles.chosenNumber}>
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
                        <View style={styles.button}><Button title="Reset" color={colors.accent} onPress={resetInputHandler} /></View>
                        <View style={styles.button}><Button title="Confirm" color={colors.primary} onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                
                {confirmedOutput}
                
                
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    screen: {
        padding:10,
        height: "100%"
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
    chosenNumber: {
        marginVertical:10,
        padding:0,
        backgroundColor:colors.cardBack
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
