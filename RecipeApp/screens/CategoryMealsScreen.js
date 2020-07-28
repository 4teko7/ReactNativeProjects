import React from 'react';
import {View, Text,StyleSheet,Button,Platform,FlatList} from 'react-native';

import {CATEGORIES,MEALS} from '../data/demoData';

//Constants
import colors from '../constants/colors';

//Components
import MealItem from '../components/MealItem';

const CategoryMetalsScreen = props =>{
    const catId = props.navigation.getParam("categoryId");

    const selectedCat = CATEGORIES.find(cat => cat.id ===catId);

    const displayedMeals =MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const DataDisplayed = 
    <FlatList keyExtractor={(item,index) => item.id} data={displayedMeals}
        renderItem={ itemData=> 
        <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        onSelectMeal={()=>{}}
        style={{width:"100%"}}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        /> }
        style={styles.flatList}
    />

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
    },
    flatList: {
        width:"100%"
    }
});

export default CategoryMetalsScreen;