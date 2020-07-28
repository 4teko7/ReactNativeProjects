import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';


const CategoriesScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button title="Go to Category Meals Screen" onPress={()=>{
                    props.navigation.navigate("CategoryMealsScreen")
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

export default CategoriesScreen;