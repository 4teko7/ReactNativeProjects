import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Dimensions
    } from 'react-native';

const widthOfScreen = Dimensions.get('window').width
const heightOfScreen = Dimensions.get('window').height

const CategoryGridTile = props => {
    const {title,onSelect,color} = props;
    return (
        <TouchableOpacity onPress={onSelect} style={styles.gridView}>
        <View style={{...styles.viewContainer,backgroundColor: color}}>
            <Text>{title}</Text>
        </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    gridView: {
        margin:15,
        height:widthOfScreen/2.5,
        width:widthOfScreen/2.5,
        justifyContent:"center",
        alignItems:"center"
    },
    viewContainer: {
        width:"100%",
        height:"100%",
        borderRadius:10,
        shadowColor:"black",
        shadowOpacity:0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius:10,
        elevation:15,
        padding:15,
        justifyContent:"flex-end",
        alignItems:"flex-end"
    }
});

export default CategoryGridTile;