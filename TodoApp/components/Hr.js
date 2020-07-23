import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Hr = props => {
    return (
        <View style={{...styles.hrView,...props.hrView}}>
            <Text style={{...styles.hrText,...props.style}}></Text>
        </View>
    );
}


const styles = StyleSheet.create({
    hrView: {
        alignItems:"center",
        width:"100%"
    },
    hrText: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderRadius:60,
        marginTop:-10,
        width:"90%"
    }
});

export default Hr;