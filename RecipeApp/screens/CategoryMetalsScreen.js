import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


const CategoryMetalsScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>CategoryMetalsScreen</Text>
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

export default CategoryMetalsScreen;