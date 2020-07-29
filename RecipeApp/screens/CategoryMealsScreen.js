import React from 'react';
import {View, Text,StyleSheet,Button,Platform,FlatList} from 'react-native';

import {CATEGORIES,MEALS} from '../data/demoData';

//Constants
import colors from '../constants/colors';

//Components
import MealList from '../components/MealList';

const CategoryMetalsScreen = props =>{
    const catId = props.navigation.getParam("categoryId");

    const selectedCat = CATEGORIES.find(cat => cat.id ===catId);

    const displayedMeals =MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    
    return (
        <MealList infos={displayedMeals} navigation={props.navigation} />
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




export default CategoryMetalsScreen;