import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const MyButtonTwo = props => {
    return (
        <View style={{...styles.grandParentView,...props.grandParentView}}>
            <View style={{...styles.parentViewStyle,...props.parentViewStyle}}>
                <Text style={{...styles.textView,...props.textView}}>{props.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    grandParentView:{
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
    textView: {
        color:"black",
        fontSize:18,
        fontFamily:"PlayfairDisplayItalic"
    }
});

export default MyButtonTwo;