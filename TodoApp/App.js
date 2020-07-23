import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

//Components
import MyButton from './components/styledComponents/MyButton';
import MyTextInput from './components/styledComponents/MyTextInput';
import Hr from './components/Hr';

export default function App() {
  const [enteredTodo,setEnteredTodo] = useState("");

  const todoInputHandler = enteredText => {
    setEnteredTodo(enteredText);
  }
  return (
    <View style={styles.screen}>
      <MyTextInput textInput={<TextInput placeholder={"Add Goal"} onChangeText={todoInputHandler} value={enteredTodo} />} style={{marginTop:10}}/>
      <Hr style={{marginBottom:10}}/>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        <MyButton button={<Button title="Add" color="red" />} style={{width:"40%",margin:10}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
