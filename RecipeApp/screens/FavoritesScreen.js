import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

//DATABASE
import {MEALS} from '../data/demoData';

//Components
import MealList from '../components/MealList';


const FavoritesScreen = props =>{
    const favMeals = MEALS.filter(meal=>meal.id ==="1" || meal.id==="2" || meal.id==="3");
    return (
        <MealList infos={favMeals} navigation={props.navigation} />
    );
}

FavoritesScreen.navigationOptions = {
    headerTitle: "Your Favoritess",
};


export default FavoritesScreen;