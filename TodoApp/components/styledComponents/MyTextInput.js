import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native';

const MyTextInput = props => {
    const {textInput} = props;

    return (
        <View style={{...styles.textInputView,...props.style}}>
        {textInput}
    </View>
    );
}

const styles = StyleSheet.create({
    textInputView: {
    }
});

export default MyTextInput
