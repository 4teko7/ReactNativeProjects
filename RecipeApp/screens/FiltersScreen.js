import React, {useState,useEffect,useCallback} from 'react';
import {View, Text,StyleSheet,Platform} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';



//Components
import MyHeaderButton from '../components/MyHeaderButton';
import MyCourgetteText from '../components/MyCourgetteText';
import FilterItem from '../components/FilterItem';


const FiltersScreen = props =>{
    const {navigation} = props;
    const [ isGlutenFree,setIsGlutenFree ] = useState(false);
    const [ isLactoseFree,setIsLactoseFree ] = useState(false);
    const [ isVegan,setIsVegan ] = useState(false);
    const [ isVegetarian,setIsVegetarian ] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log("appliedFilters : " , appliedFilters);
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian])

    useEffect(()=>{
        props.navigation.setParams({save: saveFilters});
    },[saveFilters])

    return (
            <View style={styles.screen}>
                <MyCourgetteText style={styles.title}>Available Filters / Restrictions</MyCourgetteText>
                <FilterItem state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}>Gluten-Free</FilterItem>
                <FilterItem state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}>Lactose-Free</FilterItem>
                <FilterItem state={isVegan} onChange={newValue => setIsVegan(newValue)}>Vegan</FilterItem>
                <FilterItem state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}>Vegetarian</FilterItem>
            </View>
    );
}


FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle:  "Filter Meals",
        headerLeft:(
            <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={()=>{
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
            ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item title="Save" iconName="ios-save" onPress={()=>{
                    navData.navigation.getParam("save")()
                }} />
            </HeaderButtons>
        )
    }
};


const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems:"center"
    },
    title: {
        fontSize:20,
        textAlign:"center"
    }
});

export default FiltersScreen;