import React, { useState, useRef } from 'react'
import {View,Text,Button,StyleSheet,TextInput} from 'react-native';

//Components
import MyButton from './styledComponents/MyButton';
import MyTextInput from './styledComponents/MyTextInput';
import Hr from './Hr';
import MyDate from './MyDate';

const TodoInput = props => {
    const { addTodoHandler,enteredTodo,setEnteredTodo,dateOfEditedTodo,onAddTodoScreenHandler } = props;
    
    const [todoDate, setTodoDate] = useState(new Date(1598051730000));
    // const todoDate = useRef("")

    const todoInputHandler = enteredText => {
        setEnteredTodo(enteredText);
    }

    const assignTodoDate = (tmpTodoDate) => {
        setTodoDate(tmpTodoDate);
    }

    return (
        <View style={{width:"100%",...props.grandParentView}}>
            <View style={{justifyContent:"space-around",width:"100%"}}>
                {/* <View style={{right:5,top:5,position:"absolute",width:"6%"}}><Button title="X" color={"red"}  /></View> */}
                <MyDate todoDate={assignTodoDate} dateOfEditedTodo={dateOfEditedTodo}/>
                <MyTextInput textInput={
                    (
                    <View style={{paddingHorizontal:10,width:"100%",paddingBottom:15}}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            placeholder={"Add Your Goal..."}
                            placeholderTextColor={"green"}
                            onChangeText={todoInputHandler}
                            value={enteredTodo}
                            style={{textAlign:"center",paddingTop:10,fontSize:18,textTransform:"none",paddingBottom:20}}
                        />
                        <Hr style={{width:"100%",borderBottomWidth:2}}/>
                    </View>
                    )
                    }
                />
            </View>


            <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-around"}}>
                <View style={{width:"40%"}} >
                    <Button title="Save" color="green" onPress={addTodoHandler.bind(this,enteredTodo,setEnteredTodo,todoDate)} />
                </View>
                <View style={{width:"40%"}}>
                    <Button title="Cancel" color="red" onPress={onAddTodoScreenHandler} />
                </View>
            </View>
        </View>

    )
}

export default TodoInput
