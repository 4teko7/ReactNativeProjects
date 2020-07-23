import React from 'react';
import { View, Text, StyleSheet,Button,FlatList, Touchable, TouchableOpacity } from 'react-native';

//Components
import ListItem from './ListItem';

const TodoList = props => {
    const {todoList,onDeleteHandler} = props;
    return (
          <FlatList keyExtractor={(item,index) => item.key.toString()}  data={todoList} renderItem = {itemData =>
          (
          // <TouchableOpacity onPress={onDeleteHandler.bind(this,item.key)}>
            <ListItem viewStyle={{padding:20}}>
              <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={styles.date}><Text>{itemData.item.date}</Text></View>
                <View style={{maxWidth:"78%"}}><Text style={styles.todo}>{itemData.item.todo}</Text></View>
                <View style={{right:0,top:-5,position:"absolute"}}><Button title="X" onPress={onDeleteHandler.bind(this,itemData.item.key)} /></View>
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
    fontSize:12,
    fontStyle:"italic",
    fontWeight:"bold",
    left:-10,
    top:-15
  },
  todo: {
    color:"#31e89c",
    fontSize:17,
    fontStyle:"italic",
    fontWeight:"bold"
  }
    
});

export default TodoList;