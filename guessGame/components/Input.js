import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props =>{
    return (
        <TextInput
        {...props}
        style = {{...styles.input,...props.style}}
        />
    );
}


const styles = StyleSheet.create({
    input: {
        borderBottomColor: "green",
        borderBottomWidth: 1,
        paddingTop:10,
        fontSize:20,
        textAlign: "center"
    },
});

export default Input;