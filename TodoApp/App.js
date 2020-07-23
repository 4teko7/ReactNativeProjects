import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,TextInput,Keyboard,TouchableWithoutFeedback, AsyncStorage } from 'react-native';

//Components
import MyButton from './components/styledComponents/MyButton';
import MyTextInput from './components/styledComponents/MyTextInput';
import Hr from './components/Hr';
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Footer from './components/Footer';

const todosName = "todoList";

export default function App() {
  let id = 0;
  const [todoList,setTodoList] = useState([]);

  const removeTodoData = async (name) => {
    try {
      await AsyncStorage.removeItem(name);
      setTodoList([]);
    } catch (error) {
      console.log(error)
    }
  }

  const getTodoData = async (name) => {
    try {
      const value = await AsyncStorage.getItem(name);
      if (value !== null && value.length > 0) {
        setTodoList(JSON.parse(value));
      }
    } catch (error) {
      console.log(error)
    }
  };

  const storeTodoData = async (name,filteredTodoList) => {
    try {
      await AsyncStorage.setItem(name, JSON.stringify(filteredTodoList));
    } catch (error) {
      console.log(error)
    }
  }

  

  const addTodoHandler = async (enteredTodo,setEnteredTodo,tmpTodoDate) => {
    const todoDate = tmpTodoDate.toString().substring(0,tmpTodoDate.toString().indexOf(" G"));
      try {
        const todos = [...todoList,{key: new Date().getTime(), todo: enteredTodo, date: todoDate}]
        setEnteredTodo("")
        setTodoList(todos);
        storeTodoData(todosName,todos)
      } catch (error) {
        console.log(error)
      }
    }

  const onDeleteHandler = todoId => {
    const filteredTodoList = todoList.filter(todo => todo.key !== todoId);
    setTodoList(filteredTodoList);
    storeTodoData(todosName,filteredTodoList);
  }

  useEffect(() => {
    getTodoData(todosName);
  }, [])

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} > 
      <View style={styles.screen}>
          <TodoInput addTodoHandler={addTodoHandler} />
          <TodoList todoList={todoList} style={{marginBottom:10}} onDeleteHandler={onDeleteHandler}/>
          <View style={{marginBottom:55}}></View>
          <Footer />
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
