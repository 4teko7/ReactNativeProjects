import React from 'react';
import {View, Text,StyleSheet,Button,FlatList, TouchableOpacity, Platform} from 'react-native';

import {HeaderButtons,Item} from 'react-navigation-header-buttons';


// DATA
import {CATEGORIES} from '../data/demoData';

//Constants
import colors from '../constants/colors';

//Components
import CategoryGridTile from '../components/CategoryGridTile';
import MyHeaderButton from '../components/MyHeaderButton';

const CategoriesScreen = props =>{

    const CategoriesFlatList =
    <FlatList
        keyExtractor={(item,index) => item.id}
        data={CATEGORIES}
        renderItem={itemData =>
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMealsScreen', params:{
                    categoryId: itemData.item.id
                }})
            }}
        />}
        numColumns={2}
    />


    return (
        <View style={styles.screen}>
            {CategoriesFlatList}
        </View> 
    );
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: "Meal Categories",
        headerLeft: 
            <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={()=>{
                    navData.navigation.toggleDrawer();
                }} />
            {/* <Item title="search" iconName="ios-search" onPress={() => alert('search')} /> */}

            </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
});

export default CategoriesScreen;