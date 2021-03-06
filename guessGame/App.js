import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import MyFooter from './components/MyFooter';

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} onRestartGame={newGameHandler} />
  }else if(guessRounds > 0){
    content = <GameOverScreen numberOfRounds={guessRounds} userNumber={userNumber} onRestartGame={newGameHandler} />
  }

  return (
    <View style={styles.screen}>
        <Header title="Guess a Number" />
        {content}
        <MyFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height:"100%",
    width:"100%"
  }
});
