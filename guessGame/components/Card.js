import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const Card = props => {
        return (
            <View style={{ ...styles.titleInputAndButtonsView, ...props.style }}>
                {props.children}
            </View>
        );
};


const styles = StyleSheet.create({
    titleInputAndButtonsView: {
         //Shadow Property Works On Only IOS.
         shadowColor: "black", //"rgba(0,0,0,1)"
         shadowOffset: { width:0, height:2 },
         shadowRadius: 6,
         shadowOpacity: 0.26,
         backgroundColor: "white",
         //Elevation works on only Android
         elevation: 12,
         padding:10,
         paddingBottom:15,
         borderRadius: 10
    }
});

export default Card;
