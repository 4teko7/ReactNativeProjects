import React from 'react';
import {View,Text,Platform,StyleSheet} from 'react-native';
import { Switch } from 'react-native-paper';

//Constants
import colors from '../constants/colors';

//Components
import MyCourgetteText from '../components/MyCourgetteText';

const FilterItem = props => {
    const {state,onChange} = props;
    const children = props.children;
    return (
        <View style={styles.filterContainer}>
            <View style={styles.parentTextView}><MyCourgetteText>{children}</MyCourgetteText></View>
            <Switch
            value={state}
            thumbColor={Platform.OS==="android" ? colors.primaryColor : ""}
            trackColor={{true:colors.primaryColor}}
            onValueChange={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    parentTextView: {
    },
    filterContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        width:"80%",
        marginVertical:20,
    } 
});

export default FilterItem;