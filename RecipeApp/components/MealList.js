import React from 'react';
import {View,FlatList,StyleSheet} from 'react-native';
import MealItem from '../components/MealItem';

const MealList=props=>{
    const {infos,navigation} = props;

    const renderMealItem = itemData => {
        return (
            <MealItem
                id={itemData.item.id}
                title={itemData.item.title}
                onSelectMeal={()=>{
                    navigation.navigate({routeName: "MealDetailScreen",params: {
                        mealId: itemData.item.id
                    }})
                }}
                style={{width:"100%"}}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
            />
        );
    }

        return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={(item,index) => item.id}
                data={infos}
                renderItem={renderMealItem}
                style={styles.flatList}
            />
        </View>

        )
    }

    
const styles = StyleSheet.create({
    list: {
        flex:1,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    flatList: {
        width:"100%"
    }
});
export default MealList;