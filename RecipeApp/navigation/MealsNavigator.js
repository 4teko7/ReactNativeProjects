import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
    CategoriesScreen: CategoriesScreen,
    CategoryMealsScreen : CategoryMealsScreen,
    MealDetailScreen: MealDetailScreen,
    FavoritesScreen: FavoritesScreen
});


const NavigationAppContainer = createAppContainer(MealsNavigator)


export default NavigationAppContainer;

