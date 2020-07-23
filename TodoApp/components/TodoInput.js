import React, { useState, useRef } from 'react'
import {View,Text,Button,StyleSheet,TextInput} from 'react-native';

//Components
import MyButton from './styledComponents/MyButton';
import MyTextInput from './styledComponents/MyTextInput';
import Hr from './Hr';
import MyDate from './MyDate';

const TodoInput = props => {
    const { addTodoHandler,enteredTodo,setEnteredTodo,dateOfEditedTodo } = props;

    const [todoDate, setTodoDate] = useState("");
    // const todoDate = useRef("")
    const todoInputHandler = enteredText => {
        setEnteredTodo(enteredText);
    }

    const assignTodoDate = (tmpTodoDate) => {
        setTodoDate(tmpTodoDate);
    }

    return (
        <View style={{width:"100%"}}>
            <View style={{justifyContent:"space-around",marginTop:30,width:"100%"}}>
            <MyTextInput textInput={
                (
                <View style={{paddingHorizontal:10,width:"100%",marginBottom:15}}>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder={"Add Your Goal..."}
                        placeholderTextColor={"green"}
                        onChangeText={todoInputHandler}
                        value={enteredTodo}
                        style={{textAlign:"center",paddingTop:10,fontSize:18,textTransform:"none"}}
                    />
                    <Hr hrView={{}} style={{width:"100%",borderBottomWidth:2}}/>
                </View>
                )
                }
            />
            <MyDate todoDate={assignTodoDate} dateOfEditedTodo={dateOfEditedTodo}/>
        </View>
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <MyButton button={<Button title="Save" color="red" onPress={addTodoHandler.bind(this,enteredTodo,setEnteredTodo,todoDate)} />} style={{width:"40%",margin:10}} />
        </View>
        </View>

    )
}

export default TodoInput
