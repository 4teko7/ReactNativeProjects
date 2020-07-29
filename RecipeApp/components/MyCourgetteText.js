import React from 'react';
import {Text,StyleSheet} from 'react-native';

const MyCourgetteText = props => {
    const children = props.children;
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily:"Courgette",
        flexWrap:"wrap"
    }
})

export default MyCourgetteText;