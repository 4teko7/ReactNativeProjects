import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyTitle = props => {
    const {title} = props;

    return (
        <View style={styles.textView}>
            <Text style={{...styles.text,...props.style}}>{title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    textView: {
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "red",
        fontSize: 20
    }
});

export default MyTitle;