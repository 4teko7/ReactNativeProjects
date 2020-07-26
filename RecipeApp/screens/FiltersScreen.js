import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


const FiltersScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>FiltersScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
});

export default FiltersScreen;