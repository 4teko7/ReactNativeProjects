import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} userChoice={userNumber} />

  if(userNumber){
    content = <GameScreen />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
      {/* <StartGameScreen /> */}
      {/* <GameScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({

});
