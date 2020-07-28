import React from 'react';
import {View, Text,StyleSheet,Button,Platform,FlatList} from 'react-native';

import {CATEGORIES,MEALS} from '../data/demoData';

//Constants
import colors from '../constants/colors';

const CategoryMetalsScreen = props =>{
    const catId = props.navigation.getParam("categoryId");

    const selectedCat = CATEGORIES.find(cat => cat.id ===catId);

    const displayedMeals =MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const DataDisplayed = <FlatList keyExtractor={(item,index) => item.id} data={displayedMeals} renderItem={
    itemData=><View><Text>{itemData.item.id} : {itemData.item.title}</Text></View>
    }/>

    return (
        <View style={styles.screen}>
            {DataDisplayed}
        </View>
    );
}

CategoryMetalsScreen.navigationOptions = (navigationData) => {
    // headerTitle: "Category Meal"
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCat = CATEGORIES.find(cat => cat.id ===catId);
    return {
        headerTitle: selectedCat.title,
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