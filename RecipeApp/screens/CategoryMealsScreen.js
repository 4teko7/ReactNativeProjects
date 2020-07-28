import React from 'react';
import {View, Text,StyleSheet,Button,Platform} from 'react-native';

import {CATEGORIES} from '../data/demoData';

//Constants
import colors from '../constants/colors';

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

CategoryMetalsScreen.navigationOptions = (navigationData) => {
    // headerTitle: "Category Meal"
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCat = CATEGORIES.find(cat => cat.id ===catId);
    return {
        headerTitle: selectedCat.title,
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? colors.primaryColor : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : ""
    }
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