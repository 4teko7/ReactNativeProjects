import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

import {CATEGORIES} from '../data/demoData';

const CategoryMetalsScreen = props =>{
    const catId = props.navigation.getParam("categoryId");

    const selectedCat = CATEGORIES.find(cat => cat.id ===catId);
    console.log(selectedCat);

    return (
        <View style={styles.screen}>
            <Text>Category Metals Screen</Text>
            <Button title="Go to Meals Detail" onPress={()=>{
                    props.navigation.navigate({routeName:"MealDetailScreen"})
                }}
            />
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