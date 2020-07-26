import React from 'react';
import {View,Text,StyleSheet,Button, TouchableOpacity} from 'react-native';

const MyButton = props => {
    const {pressMethod} = props;

    return (
        <TouchableOpacity onPress={pressMethod}>
            <View style={{...styles.buttonView,...props.style}}>
                {props.children}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonView: {
        width:"100%"
    }
});

export default MyButton;