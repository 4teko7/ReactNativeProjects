import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/demoData";

//Components
import MyHeaderButton from "../components/MyHeaderButton";
import MyCourgetteText from "../components/MyCourgetteText";

const ListItem = props => {
    const children = props.children;
    return (
        <View style={styles.listItem}>
            <MyCourgetteText>{children}</MyCourgetteText>
        </View>
    )
}
const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
      <ScrollView>
          <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
          <View style={styles.mealDetail}>
            <MyCourgetteText>{selectedMeal.duration}m</MyCourgetteText>
            <MyCourgetteText>{selectedMeal.complexity}</MyCourgetteText>
            <MyCourgetteText>{selectedMeal.affordability}</MyCourgetteText>
          </View>
          <View style={styles.titleView}><Text style={styles.title}>Ingredients</Text></View>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
          <View style={styles.titleView}><Text style={styles.title}>Steps</Text></View>
            {selectedMeal.steps.map(step=>(
              <ListItem key={step}>{step}</ListItem>
            ))}
        <View style={styles.screen}>
        
        </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("MARKED AS FAV !");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
    mealDetail: {
        flexDirection:"row",
        padding: 10,
        justifyContent:"space-around",
        backgroundColor:"#ccc",
        opacity:0.9
    },
    image: {
        width:"100%",
        height:200
    },
    titleView: {
        alignItems:"center",
        backgroundColor:"orange"
    },
    title: {
        fontSize:22,
        fontWeight:"bold",
        fontStyle:"italic"
    },
    listItem: {
        marginVertical:10,
        marginHorizontal:20,
        borderColor:"#ccc",
        borderWidth:1,
        padding:10
    }

});

export default MealDetailScreen;
