import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';


const FavoritesScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>FavoritesScreen</Text>
            <Button title="Go Main Page" onPress={()=>{
                props.navigation.popToTop()
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

export default FavoritesScreen;