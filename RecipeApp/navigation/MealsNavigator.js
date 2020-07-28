import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMetalsScreen from '../screens/CategoryMetalsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals : CategoryMetalsScreen,
    MealDetail: MealDetailScreen,
    Favorites: FavoritesScreen
});


const NavigationAppContainer = createAppContainer(MealsNavigator)


export default NavigationAppContainer;

