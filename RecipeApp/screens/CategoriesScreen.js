import React from 'react';
import {View, Text,StyleSheet,Button,FlatList, TouchableOpacity, Platform} from 'react-native';

// DATA
import {CATEGORIES} from '../data/demoData';

//Constants
import colors from '../constants/colors';



const CategoriesScreen = props =>{

    const CategoriesFlatList =
    <FlatList
        keyExtractor={(item,index) => item.id}
        data={CATEGORIES}
        renderItem={itemData =>(
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate({
                    routeName: 'CategoryMealsScreen', params:{
                    categoryId: itemData.item.id
                }})
            }}>
            <View style={styles.gridView}>
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
            )}
        numColumns={2}
    />


    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            {CategoriesFlatList}
        </View> 
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    gridView: {
        margin:15,
        height:100,
        justifyContent:"center",
        alignItems:"center"
    }
});

export default CategoriesScreen;