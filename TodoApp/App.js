import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

//Components
import MyButton from './components/styledComponents/MyButton';
import MyTextInput from './components/styledComponents/MyTextInput';
import Hr from './components/Hr';
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Footer from './components/Footer';
import loadFonts from './util/loadFonts';
import MyTitle from './components/styledComponents/MyTitle';

const todosName = "todoList";



export default function App() {
  let id = 0;
  const [todoList,setTodoList] = useState([]);
  const [enteredTodo, setEnteredTodo] = useState("");
  const [todo,setTodo] = useState({})
  const [dataLoaded,setDataLoaded] = useState(false);
  

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
    const index = tmpTodoDate.toString().indexOf(":",tmpTodoDate.toString().indexOf(":")+1);
    const todoDate = tmpTodoDate.toString().substring(0,index !== -1 ? index : tmpTodoDate.length );
      try {
        const filteredTodoList = todoList.filter(tmpTodo => tmpTodo.key !== todo.key);
        const todos = [{key: new Date().getTime(), todo: enteredTodo, date: todoDate},...filteredTodoList]
        setEnteredTodo("")
        setTodoList(todos);
        storeTodoData(todosName,todos)
      } catch (error) {
        console.log(error) 
      }
  }

  const onEditHandler = (todoId) => {
    todoList.filter(tmpTodo => {
      if(tmpTodo.key === todoId){
        setTodo(tmpTodo);
        setEnteredTodo(tmpTodo.todo);
      }
    });
  }

  const onDeleteHandler = todoId => {
    const filteredTodoList = todoList.filter(todo => todo.key !== todoId);
    setTodoList(filteredTodoList);
    storeTodoData(todosName,filteredTodoList);
  }

  useEffect(() => {
    getTodoData(todosName);
    loadFonts(setDataLoaded);
  }, [])

    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} > 
        {
        dataLoaded
        ?
        <View style={styles.screen}>
            <TodoInput addTodoHandler={addTodoHandler} enteredTodo={enteredTodo}  setEnteredTodo={setEnteredTodo} dateOfEditedTodo={todo.date}/>
            <TodoList todoList={todoList} style={{marginBottom:10}} onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler} />
            <View style={{marginBottom:55}}></View>
            <Footer />
        </View> 
        :
        <ActivityIndicator style={styles.activityIndicator} size="large"  />
        }
      </TouchableWithoutFeedback>
    );
  }

const styles = StyleSheet.create({
  screen: {
    width:"100%",
    height:"100%"
    
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
