import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

//Components
import MyButton from './components/styledComponents/MyButton';
import MyTextInput from './components/styledComponents/MyTextInput';
import Hr from './components/Hr';
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';

export default function App() {
  const [enteredTodo,setEnteredTodo] = useState("");
  const [todoList,setTodoList] = useState([]);

  const todoInputHandler = enteredText => {
    setEnteredTodo(enteredText);
  }

  const addTodoHandler = () => {
    setTodoList([...todoList,enteredTodo]);
  }
  

  return (
    <View style={styles.screen}>
      <MyTextInput textInput={<TextInput placeholder={"Add Goal"} onChangeText={todoInputHandler} value={enteredTodo} style={{textAlign:"center"}} />} style={{marginTop:30}}/>
      <Hr style={{marginBottom:10}}/>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        <MyButton button={<Button title="Add" color="red" onPress={addTodoHandler}/>} style={{width:"40%",margin:10}} />
      </View>
          <TodoList todoList={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width:"100%",
    height:"100%"
  }
});
