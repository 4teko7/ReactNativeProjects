import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,Keyboard,TouchableWithoutFeedback, ScrollView } from 'react-native';

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
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} > 
      
   
      <View style={styles.screen}>
        
        <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:30}}>
          <MyTextInput textInput={
          (
          <View style={{paddingHorizontal:10,width:"100%",marginBottom:15}}>
            <TextInput placeholder={"Add Goal"} onChangeText={todoInputHandler} value={enteredTodo} style={{textAlign:"center",paddingTop:10}} />
            <Hr hrView={{}} style={{width:"100%",borderBottomWidth:2}}/>
          </View>)
          } style={{flex:4}}/>
          <MyButton button={<Button title="Add" color="red" onPress={addTodoHandler}/>} style={{width:"40%",margin:10,flex:1}} />
        </View>
        <ScrollView>
            <TodoList todoList={todoList} />
        </ScrollView>
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
