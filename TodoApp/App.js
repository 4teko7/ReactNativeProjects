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
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  Image
} from 'react-native';

//Components
import MyButton from './components/styledComponents/MyButton';
import MyTextInput from './components/styledComponents/MyTextInput';
import Hr from './components/Hr';
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Footer from './components/Footer';
import Header from './components/Header';
import loadFonts from './util/loadFonts';
import MyTitle from './components/styledComponents/MyTitle';
import MyButtonTwo from './components/styledComponents/MyButtonTwo';


//Constants
import {turkish,english} from './constants/language';

const todosName = "todoList";
const languageName = "language";
global.language = english;

export default function App() {
  let id = 0;
  const [todoList,setTodoList] = useState([]);
  const [enteredTodo, setEnteredTodo] = useState("");
  const [todo,setTodo] = useState({})
  const [dataLoaded,setDataLoaded] = useState(false);
  const [isTodoInputVisible,setIsTodoInputVisible] = useState(false);
  const [language,setLanguage] = useState("english");

  
  const removeTodoData = async (name) => {
    try {
      await AsyncStorage.removeItem(name);
      setTodoList([]);
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async (name) => {
    try {
      const value = await AsyncStorage.getItem(name);
      if (value !== null && value.length > 0) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const storeData = async (name,data) => {
    try {
      await AsyncStorage.setItem(name, JSON.stringify(data));
    } catch (error) {
      console.log(error)
    }
  }

  const addTodoHandler = async (enteredTodo,setEnteredTodo,tmpTodoDate) => {
    tmpTodoDate = tmpTodoDate ? tmpTodoDate : new Date();
    const index = tmpTodoDate.toString().indexOf(":",tmpTodoDate.toString().indexOf(":")+1);
    const todoDate = tmpTodoDate.toString().substring(0,index !== -1 ? index : tmpTodoDate.length );
      try {
        const filteredTodoList = todoList.filter(tmpTodo => tmpTodo.key !== todo.key);
        const todos = [{key: new Date().getTime(), todo: enteredTodo, date: todoDate},...filteredTodoList]
        setEnteredTodo("")
        setTodoList(todos);
        storeData(todosName,todos)
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
    setIsTodoInputVisible(true);
  }

  const onDeleteHandler = todoId => {
    const filteredTodoList = todoList.filter(todo => todo.key !== todoId);
    setTodoList(filteredTodoList);
    storeData(todosName,filteredTodoList);
  }

  const onAddTodoScreenHandler = () =>{
    if(isTodoInputVisible){
      setEnteredTodo("");
    }
    setIsTodoInputVisible(!isTodoInputVisible);
    setTodo({});
  }

  const asssignLanguageObjectComingFromStorage = (langName) =>{
    global.language = langName === "english" ? english : turkish;
    setLanguage(langName);
  }

  const onlanguageHandler = () => {
    setLanguage(language === "english" ? "turkish" : "english");
    global.language = language === "english" ? turkish : english;
    storeData(languageName,global.language.language);
  }

  const componentDidMount = async () => {
    setTodoList(await getData(todosName));
    const langName = await getData(languageName)
    asssignLanguageObjectComingFromStorage(langName)
    loadFonts(setDataLoaded);
  }
  useEffect(() => {
    componentDidMount();
  }, [])



    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} > 
        {
        dataLoaded
        ?
        <View style={styles.screen}>
          <Header title={global.language.todoApp} viewStyle={{height:60,paddingTop:0,backgroundColor:"#99ff66"}} textStyle={{fontFamily:"Courgette"}} />
            {
              isTodoInputVisible
              ?
              <TodoInput
                addTodoHandler={addTodoHandler}
                enteredTodo={enteredTodo}
                setEnteredTodo={setEnteredTodo}
                dateOfEditedTodo={todo.date}
                onAddTodoScreenHandler={onAddTodoScreenHandler}
                grandParentView={{marginVertical:15}}
              />
              :
              <View style={{flexDirection:"row"}}>
              <TouchableOpacity onPress={onlanguageHandler} activeOpacity={0.3} style={{width:"20%",zIndex:2}}>
                <Image source={require('./assets/images/engTr.png')} style={styles.lanImage} />
              </TouchableOpacity>

                <MyButtonTwo title={global.language.addTodo}
                  onAddTodoScreenHandler={onAddTodoScreenHandler}
                  grandParentViewStyle={{marginVertical:10, marginTop:3,left:"-20%"}}
                  parentViewStyle={{backgroundColor:"#cc6600"}}
                  textViewStyle={{fontSize:30,marginTop:-5}}
                />
              </View>
            }
           <TodoList todoList={todoList} style={{marginBottom:10}} onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler} />
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
    height:"100%",
    backgroundColor:"#99ff66"
    
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lanImage: {
    width:55,
    height:55,
    left:10
  }
});
