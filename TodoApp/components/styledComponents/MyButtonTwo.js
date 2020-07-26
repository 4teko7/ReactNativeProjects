import React from 'react';
import {View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';

const MyButtonTwo = props => {
    const {onAddTodoScreenHandler} = props;
    return (
        <View style={{...styles.grandParentViewStyle,...props.grandParentViewStyle}}>
            <TouchableOpacity onPress={onAddTodoScreenHandler} activeOpacity={0.3} style={{...styles.touchable,...props.touchable}}>
                <View style={{...styles.parentViewStyle,...props.parentViewStyle}}>
                    <Text style={{...styles.textViewStyle,...props.textViewStyle}}>{props.title}</Text>
                </View>
            </TouchableOpacity> 
        </View>

    );
}

const styles = StyleSheet.create({
    grandParentViewStyle:{
        flexDirection:"row",
        zIndex:1
    },
    touchable:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"

    },
    parentViewStyle: {
        padding:0,
        backgroundColor:"green",
        borderRadius:20,
        height:60,
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        zIndex:1
        
    },
    textViewStyle: {
        color:"black",
        fontSize:18,
        fontFamily:"PlayfairDisplayItalic"
    }
});

export default MyButtonTwo;