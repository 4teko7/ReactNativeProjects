import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyText = props => {
    const {text} = props;

    return (
        <View style={styles.textView}>
            <Text style={{...styles.text,...props.style}}>{text}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    textView: {
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "blue",
        fontSize: 15,
        fontStyle:"italic"

    }
});

export default MyText;