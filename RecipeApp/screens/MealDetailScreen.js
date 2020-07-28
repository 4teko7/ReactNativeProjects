import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

import {MEALS} from '../data/demoData';

const MealDetailScreen = props =>{
    const mealId = props.navigation.getParam("mealId");
    const selectedMeal = MEALS.filter(meal => meal.id === mealId);
    console.log("selectedMeal : " , selectedMeal);
    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
            <Button title="Go to Favorites Screen" onPress={()=>{
                    // props.navigation.navigate({routeName:"CategoryMeals"})
                    props.navigation.push("FavoritesScreen")
                }}
            />
            <Button title="Go Back" onPress={()=>{
                props.navigation.pop()
            }}
            />
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    console.log("selectedMeal.title : " , selectedMeal.title);
    return {
        headerTitle: selectedMeal.title
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

export default MealDetailScreen;