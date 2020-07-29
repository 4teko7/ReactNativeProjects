import React from 'react';
import {View,Text,Platform,StyleSheet} from 'react-native';
import { Switch } from 'react-native-paper';

//Constants
import colors from '../constants/colors';

const FilterItem = props => {
    const {isGlutenFree,setIsGlutenFree} = props;
    const children = props.children;
    return (
        <View style={styles.filterContainer}>
            <View style={styles.parentTextView}><Text>{children}</Text></View>
            <Switch
            value={isGlutenFree}
            thumbColor={Platform.OS==="android" ? colors.primaryColor : ""}
            trackColor={{true:colors.primaryColor}}
            onValueChange={newValue => setIsGlutenFree(newValue)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    parentTextView: {
        margin:20,
    },
    filterContainer: {
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"80%"
    } 
});

export default FilterItem;