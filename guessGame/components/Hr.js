import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Hr = props => {
    return (
        <View style={styles.hrView}>
            <Text style={{...styles.hrText,...props.style}}></Text>
        </View>
    );
}


const styles = StyleSheet.create({
    hrView: {
        alignItems:"center"
    },
    hrText: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop:-10,
        width:"90%"
    }
});

export default Hr;