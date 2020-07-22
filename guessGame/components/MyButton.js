import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import Colors from '../constants/color';

const MyButton = props =>{
    const buttons = [];
    props.buttons.map(button => {
        buttons.push(
            <View style={{...styles.parentViewStyle,...props.parentViewStyle}}>
                {button}
            </View>
        )
    });

    return (
        <View key={new Date().getMilliseconds()} style={{...styles.grandViewStyle,...props.grandViewStyle}}>
            {buttons}
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
        marginTop:15,
    },
    parentViewStyle: {
        width:"40%"
    }
});


export default MyButton;