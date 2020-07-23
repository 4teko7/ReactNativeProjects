import React from 'react';
import { View, Text, StyleSheet,TouchableWithoutFeedback } from 'react-native';

const ListItem = props => {
    return (
        <TouchableWithoutFeedback>
            <View style={{alignItems:"center"}}>
                <View style={{...styles.view,...props.viewStyle}}>
                    {props.children}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    view: {
        backgroundColor:"grey",
        borderRadius:10,
        marginVertical:3,
        padding:10,
        maxWidth:"80%",
        width:"100%"
    },
    text: {
        borderBottomWidth: 1,
        borderRadius:60,
        marginTop:-10,
        width:"90%"
    }
});

export default ListItem;