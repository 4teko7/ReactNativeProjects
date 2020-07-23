import React, { useState } from 'react'
import {View,Text,Button,StyleSheet,TextInput} from 'react-native';

//Components
import MyButton from './styledComponents/MyButton';
import MyTextInput from './styledComponents/MyTextInput';
import Hr from './Hr';

const TodoInput = props => {
    const { addTodoHandler } = props;

    const [enteredTodo,setEnteredTodo] = useState("");

    const todoInputHandler = enteredText => {
        setEnteredTodo(enteredText);
      }

    return (
        <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:30}}>
            <MyTextInput textInput={
                (
                <View style={{paddingHorizontal:10,width:"100%",marginBottom:15}}>
                    <TextInput placeholder={"Add Goal"} onChangeText={todoInputHandler} value={enteredTodo} style={{textAlign:"center",paddingTop:10}} />
                    <Hr hrView={{}} style={{width:"100%",borderBottomWidth:2}}/>
                </View>
                )
                } style={{flex:4}}
            />
            <MyButton button={<Button title="Add" color="red" onPress={addTodoHandler.bind(this,enteredTodo)}/>} style={{width:"40%",margin:10,flex:1}} />
        </View>
    )
}

export default TodoInput
