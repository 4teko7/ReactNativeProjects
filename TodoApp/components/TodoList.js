import React from 'react';
import { View, Text, StyleSheet,Button,FlatList, Touchable, TouchableOpacity } from 'react-native';

//Components
import ListItem from './ListItem';
import MyBodyText from './styledComponents/MyBodyText';


const TodoList = props => {
    const {todoList,onDeleteHandler,onEditHandler} = props;
    return (
          <FlatList keyExtractor={(item,index) => item.key.toString()}  data={todoList} renderItem = {itemData =>
          (
          // <TouchableOpacity onPress={onDeleteHandler.bind(this,item.key)}>
            <ListItem viewStyle={{padding:20}}>
              <View style={{flexDirection:"row"}}>
                <View style={styles.dateView}><Text style={styles.date}>{itemData.item.date}</Text></View>
                <View style={{width:"85%"}}><MyBodyText style={styles.todo}>{itemData.item.todo}</MyBodyText></View>
                <View style={{right:20,top:-5,position:"absolute"}}><Button title="E" onPress={onEditHandler.bind(this,itemData.item.key)} /></View>
                <View style={{right:-10,top:-5,position:"absolute"}}><Button title="X" color={"red"} onPress={onDeleteHandler.bind(this,itemData.item.key)} /></View>
              </View>
            </ListItem>
          // </TouchableOpacity>
          )} style={props.style} />
    );
}


const styles = StyleSheet.create({
  dateView: {
    display:"flex",
    position:"absolute",
    color:"blue",
    fontSize:13,
    fontStyle:"italic",
    fontWeight:"bold",
    left:-10,
    top:-18
  },
  date: {
    fontWeight:"bold"
  },
  todo: {
    color:"#66ccff",
    fontSize:19,
  }
    
});

export default TodoList;