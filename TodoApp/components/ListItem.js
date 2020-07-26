import React from 'react';
import { View, Text, StyleSheet,TouchableWithoutFeedback,Keyboard } from 'react-native';

const ListItem = props => {
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}} >
            <View style={{alignItems:"center"}}>
                <View style={{...styles.view,...props.viewStyle}}>
                    {props.children}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    view: {
        backgroundColor:"#996633",
        borderRadius:10,
        marginVertical:3,
        padding:10,
        maxWidth:"90%",
        width:"100%",
    },
    text: {
        borderBottomWidth: 1,
        borderRadius:60,
        marginTop:-10,
        width:"90%"
    }
});

export default ListItem;