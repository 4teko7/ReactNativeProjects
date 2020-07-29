import React, {useState} from 'react';
import {View, Text,StyleSheet,Platform} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';



//Components
import MyHeaderButton from '../components/MyHeaderButton';
import MyCourgetteText from '../components/MyCourgetteText';
import FilterItem from '../components/FilterItem';


const FiltersScreen = props =>{
    const [ isGlutenFree,setIsGlutenFree ] = useState(false);
    return (
            <View style={styles.screen}>
                <MyCourgetteText style={styles.title}>Available Filters / Restrictions</MyCourgetteText>
                <FilterItem isGlutenFree={isGlutenFree} setIsGlutenFree={setIsGlutenFree}>Gluten-Free</FilterItem>
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