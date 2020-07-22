import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import Colors from '../constants/color';

const MyButton = props =>{
    return (
        <View style={{...styles.grandViewStyle,...props.grandViewStyle}}>
            <View style={{...styles.parentViewStyle,...props.parentViewStyle}}>
                <Button title="Start Game" style={{...props.buttonStyle}}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    grandViewStyle: {
        marginTop:5,
        padding:0,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop:15
    },
    parentViewStyle: {
        width:"40%"
    }
});


export default MyButton;