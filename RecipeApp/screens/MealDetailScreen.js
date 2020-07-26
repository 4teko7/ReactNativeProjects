import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


const MealDetailScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
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

export default MealDetailScreen;