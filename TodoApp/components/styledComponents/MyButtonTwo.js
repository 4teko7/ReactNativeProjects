import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const MyButtonTwo = props => {
    return (
        <View style={{...styles.grandParentViewStyle,...props.grandParentViewStyle}}>
            <View style={{...styles.parentViewStyle,...props.parentViewStyle}}>
                <Text style={{...styles.textViewStyle,...props.textViewStyle}}>{props.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    grandParentViewStyle:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    parentViewStyle: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"60%",
        height:"110%",
        padding:0,
        margin:8,
        backgroundColor:"green",
        borderRadius:20,
    },
    textViewStyle: {
        color:"black",
        fontSize:18,
        fontFamily:"PlayfairDisplayItalic"
    }
});

export default MyButtonTwo;