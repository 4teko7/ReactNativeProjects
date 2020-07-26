import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import loadFonts from './util/loadFonts';
import {AppLoading} from 'expo';

//Components
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMetalsScreen from "./screens/CategoryMetalsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FiltersScreen from "./screens/FiltersScreen";


export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false);
  const componentDidMount = async () =>{
    await loadFonts();
  }

  if(!fontLoaded){
    return (
      <AppLoading
        startAsync={componentDidMount}
        onFinish={() => {setFontLoaded(true)}}
        onError={console.warn}
      />
    );
  }else{
    return (
      (
        <View>
          <CategoriesScreen />
          <CategoryMetalsScreen />
          <FavoritesScreen />
          <MealDetailScreen />
          <FiltersScreen />
        </View>
      )
    );
  }
  
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
