import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

//Components
import MyHeaderButton from '../components/MyHeaderButton';

const FiltersScreen = props =>{
    return (
            <Text>FiltersScreen</Text>
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
    
});

export default FiltersScreen;