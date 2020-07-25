import React from 'react';
import { View, Text, StyleSheet,Button,FlatList, Touchable, TouchableOpacity } from 'react-native';

//Components
import ListItem from './ListItem';

const TodoList = props => {
    const {todoList,onDeleteHandler,onEditHandler} = props;
    return (
          <FlatList keyExtractor={(item,index) => item.key.toString()}  data={todoList} renderItem = {itemData =>
          (
          // <TouchableOpacity onPress={onDeleteHandler.bind(this,item.key)}>
            <ListItem viewStyle={{padding:20}}>
              <View style={{flexDirection:"row"}}>
                <View style={styles.date}><Text>{itemData.item.date}</Text></View>
                <View style={{width:"85%"}}><Text style={styles.todo}>{itemData.item.todo}</Text></View>
                <View style={{right:20,top:-5,position:"absolute"}}><Button title="E" onPress={onEditHandler.bind(this,itemData.item.key)} /></View>
                <View style={{right:-10,top:-5,position:"absolute"}}><Button title="X" color={"red"} onPress={onDeleteHandler.bind(this,itemData.item.key)} /></View>
              </View>
            </ListItem>
          // </TouchableOpacity>
          )} style={props.style} />
    );
}


const styles = StyleSheet.create({
    date: {
    display:"flex",
    position:"absolute",
    color:"blue",
    fontSize:13,
    fontStyle:"italic",
    fontWeight:"bold",
    left:-10,
    top:-15
  },
  todo: {
    color:"#0feed3",
    fontSize:17,
    fontFamily:"Courgette"
  }
    
});

export default TodoList;