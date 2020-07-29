import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import { Ionicons } from "@expo/vector-icons";


//DATABASE
import {MEALS} from '../data/demoData';

//Components
import MealList from '../components/MealList';
import MyHeaderButton from '../components/MyHeaderButton';

const FavoritesScreen = props =>{
    const favMeals = MEALS.filter(meal=>meal.id ==="1" || meal.id==="2" || meal.id==="3");
    return (
        <MealList infos={favMeals} navigation={props.navigation} />
    );
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle:  "Your Favoritess",
        headerLeft:(
            <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item title="Menu" iconName="ios-star" onPress={()=>{
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
            )
    }
};


export default FavoritesScreen;