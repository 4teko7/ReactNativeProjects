import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';


const MealDetailScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
            <Button title="Go to Favorites Screen" onPress={()=>{
                    // props.navigation.navigate({routeName:"CategoryMeals"})
                    props.navigation.push("FavoritesScreen")
                }}
            />
            <Button title="Go Back" onPress={()=>{
                props.navigation.pop()
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
});

export default MealDetailScreen;