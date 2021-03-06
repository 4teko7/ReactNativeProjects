import React,{useState} from 'react';
import { View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Touchable,
  TouchableOpacity,
  Keyboard
} from 'react-native';
// import Ionocons from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
//Components
import ListItem from './ListItem';
import MyBodyText from './styledComponents/MyBodyText';
import MyButton from './styledComponents/MyButton';

const converDateEngToTr = todo =>{
  todo.date = todo.date.replace("Sun ","Pazar ")
                        .replace("Mon ","Pazartesi ")
                        .replace("Tue ","Salı ")
                        .replace("Wed ","Çarşamba ")
                        .replace("Thu ","Perşembe ")
                        .replace("Fri ","Cuma ")
                        .replace("Sat ","Cumartesi ")

                        .replace("Jan ","Ocak ")
                        .replace("Feb ","Şubat ")
                        .replace("Mar ","Mart ")
                        .replace("Apr ","Nisan ")
                        .replace("May ","Mayıs ")
                        .replace("Jun ","Haziran ")
                        .replace("Jul ","Temmuz ")
                        .replace("Aug ","Ağustos ")
                        .replace("Sep ","Eylül ")
                        .replace("Oct ","Ekim ")
                        .replace("Nov ","Kasım ")
                        .replace("Dec ","Aralık ")

}

const converDateTrToEng = todo =>{
  todo.date = todo.date.replace("Pazar ","Sun ")
                        .replace("Pazartesi ","Mon ")
                        .replace("Salı ","Tue ")
                        .replace("Çarşamba ","Wed ")
                        .replace("Perşembe ","Thu ")
                        .replace("Cuma ","Fri ")
                        .replace("Cumartesi ","Sat ")

                        .replace("Ocak ","Jan ")
                        .replace("Şubat ","Feb ")
                        .replace("Mart ","Mar ")
                        .replace("Nisan ","Apr ")
                        .replace("Mayıs ","May ")
                        .replace("Haziran ","Jun ")
                        .replace("Temmuz ","Jul ")
                        .replace("Ağustos ","Aug ")
                        .replace("Eylül ","Sep ")
                        .replace("Ekim ","Oct ")
                        .replace("Kasım ","Nov ")
                        .replace("Aralık ","Dec ")
}

const TodoList = props => {
    const {todoList,onDeleteHandler,onEditHandler,language} = props;
    if(global.language.language === "turkish"){
      todoList.forEach(todo => {
        converDateEngToTr(todo);
      })
    }else if(global.language.language === "english"){
      todoList.forEach(todo => {
        converDateTrToEng(todo);
      })
    }
    return (
          <FlatList
          keyboardShouldPersistTaps={'handled'}
          keyExtractor={(item,index) => item.key.toString()}
          data={todoList} renderItem = {itemData =>
          (
          // <TouchableOpacity onPress={onDeleteHandler.bind(this,item.key)}>
            <ListItem viewStyle={{padding:20}}>
              <View style={{flexDirection:"row"}}>
                <View style={styles.dateView}><Text style={styles.date}>{itemData.item.date}</Text></View>
                <View style={{width:"85%"}}><MyBodyText style={styles.todo}>{itemData.item.todo}</MyBodyText></View>
                <View style={{right:20,top:-5,position:"absolute"}}>
                  <MyButton pressMethod={onEditHandler.bind(this,itemData.item.key)}>
                      <Entypo name="edit" size={24} color="#ffbb00" />
                  </MyButton>
                </View>
                <View style={{right:-10,top:-5,position:"absolute"}}>
                  <MyButton pressMethod={onDeleteHandler.bind(this,itemData.item.key)}>
                      <AntDesign name="delete" size={25} color="#fb0303" />
                  </MyButton>
                </View>
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