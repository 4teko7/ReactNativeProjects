import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,Keyboard,TouchableWithoutFeedback, FlatList, ScrollView } from 'react-native';

//Components
import MyButton from './components/styledComponents/MyButton';
import MyTextInput from './components/styledComponents/MyTextInput';
import Hr from './components/Hr';
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App() {
  let id = 0;
  const [todoList,setTodoList] = useState([]);

  const addTodoHandler = (enteredTodo) => {
    setTodoList([...todoList,{key: new Date().getTime(), value: enteredTodo}]);
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} > 
      <View style={styles.screen}>
          <TodoInput addTodoHandler={addTodoHandler} />
          <TodoList todoList={todoList} style={{marginBottom:10}}/>
      </View> 
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    width:"100%",
    height:"100%"
    
  }
});
