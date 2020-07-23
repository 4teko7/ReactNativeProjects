import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

//Components
import ListItem from './ListItem';

const TodoList = props => {
    let id = 0;
    const {todoList} = props;
    const todoViews = [];
    todoList.forEach(todo=>{
    todoViews.push( 
      <ListItem key={id++} viewStyle={{padding:20}}>
        <View style={{flexDirection:"row",justifyContent:"space-around"}}>
         <View style={{maxWidth:"78%"}}><Text style={{color:"blue",fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{todo}</Text></View>
         <View style={{right:0,top:-5,position:"absolute"}}><Button title="X" /></View>
         </View>
      </ListItem>
    );
  });
    return (
         <View>{todoViews}</View>
    );
}


const styles = StyleSheet.create({
    
});

export default TodoList;