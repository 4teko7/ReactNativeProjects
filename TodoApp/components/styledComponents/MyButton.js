import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const MyButton = props => {
    const {button} = props;

    return (
        <View style={{...styles.buttonView,...props.style}}>
            {button}
        </View>
    );
}

const styles = StyleSheet.create({
    buttonView: {
        width:"60%"
    }
});

export default MyButton;