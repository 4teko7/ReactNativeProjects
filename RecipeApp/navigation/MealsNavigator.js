import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { Ionicons } from "@expo/vector-icons";

import { Platform } from "react-native";

//Constants
import colors from "../constants/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { color } from "react-native-reanimated";

const defaultStackNavOption = {
    headerTitle: "Screen",
    headerTitleAlign: "center",
    
    // headerTitleStyle: {
    //     position:"absolute",
    //     top:"50%",
    //     left:"50%",
    //     transform: translate("50%","50%"),
    //     textAlign:"center",
    //     flex:1
    // },
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primaryColor : ""
    },
    headerTitleStyle: {
        fontSize: 23,
        fontFamily: "Courgette"
    },
    headerTintColor: Platform.OS === "android" ? "white" : "",
  }

const MealsNavigator = createStackNavigator(
  {
    CategoriesScreen: CategoriesScreen,
    CategoryMealsScreen: CategoryMealsScreen,
    MealDetailScreen: MealDetailScreen,
  },
  {
    mode: "modal",
    initialRouteName: "CategoriesScreen",
    defaultNavigationOptions: defaultStackNavOption,
  }
);

const FavNavigator = createStackNavigator(
    {
        FavoritesScreen: FavoritesScreen,
        MealDetailScreen: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOption
    }
    
  )

const bottomTabNavigator = {
        Meals: {
          screen: MealsNavigator,
          navigationOptions: {
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-restaurant"
                  size={24}
                  color={tabInfo.tintColor}
                />
              );
            },
            tabBarColor: colors.primaryColor
          },
        },
        Favorites: {
          screen: FavNavigator,
          navigationOptions: {
            titleabel: "Favorites !",
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-star"
                  size={24}
                  color={tabInfo.tintColor}
                />
              );
            },
            // tabBarColor: colors.accentColor
            tabBarColor: "grey"
          },
          

        }
}
const MealsFavTabNavigator =
    Platform.OS === "android"
        ? createMaterialBottomTabNavigator(
            bottomTabNavigator,
            {
                activeColor: "white",
                activeColor: colors.accentColor,
                activeTintColor: "white",
                shifting: true,
                // barStyle: {
                //     backgroundColor:"red"
                // }
            }
        )
        : createBottomTabNavigator(
            bottomTabNavigator,
            {
            tabBarOptions: {
                activeTintColor: colors.accentColor,
                fontSize: 22,
            },
            }
        );

const FiltersNavigator = createStackNavigator({
        FiltersScreen: FiltersScreen
},
{
    defaultNavigationOptions: defaultStackNavOption
})

const MainNavigator = createDrawerNavigator({
    MealsAndFavsTabsNavigator: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals"
        }
    },
    FilterScreen: {
        screen : FiltersNavigator,
        navigationOptions: {
            drawerLabel:"Filter",
            
        }
    }
},
{
    contentOptions: {
        activeTintColor: colors.accentColor,
        labelStyle: {
            fontWeight: "normal",
            fontFamily: "Courgette"
        },
    }
})
const NavigationAppContainer = createAppContainer(MainNavigator);

export default NavigationAppContainer;
