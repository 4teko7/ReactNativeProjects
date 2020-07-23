import React from 'react';
import { View, Text, StyleSheet,Button,FlatList, ScrollView } from 'react-native';

//Components
import ListItem from './ListItem';

const TodoList = props => {
    const {todoList} = props;

    return (
          <FlatList keyExtractor={(item,index) => item.key.toString()}  data={todoList} renderItem = {itemData =>
          (
          <ListItem viewStyle={{padding:20}}>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <View style={{maxWidth:"78%"}}><Text style={{color:"blue",fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{itemData.item.value}</Text></View>
            <View style={{right:0,top:-5,position:"absolute"}}><Button title="X" /></View>
            </View>
          </ListItem>
          )} />
    );
}


const styles = StyleSheet.create({
    
});

export default TodoList;