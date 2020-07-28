import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import {Platform} from 'react-native';

//Constants
import colors from '../constants/colors';




const MealsNavigator = createStackNavigator({
    // CategoriesScreen: {
    //     screen: CategoriesScreen,
    //     navigationOptions: {
    //         headerTitle: "Categories"
    //     }
    // },
    CategoriesScreen : CategoriesScreen,
    CategoryMealsScreen : CategoryMealsScreen,
    MealDetailScreen: MealDetailScreen,
    FavoritesScreen: FavoritesScreen
},
    {
        mode:"modal",
        initialRouteName:"CategoriesScreen",
        defaultNavigationOptions: {
            headerTitle:"Screen",
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? colors.primaryColor : ""
            },
            headerTintColor: Platform.OS === "android" ? "white" : ""
        }
    }
);


const NavigationAppContainer = createAppContainer(MealsNavigator)


export default NavigationAppContainer;

