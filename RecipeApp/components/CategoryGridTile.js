import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Dimensions,
    Platform,
    TouchableNativeFeedback
    } from 'react-native';

const widthOfScreen = Dimensions.get('window').width
const heightOfScreen = Dimensions.get('window').height

const CategoryGridTile = props => {
    let TouchableComp = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback;
    }
    const {title,onSelect,color} = props;
    return (
        <View style={styles.gridView}>
            <TouchableComp activeOpacity={0.4} onPress={onSelect} style={{flex:1}}>
                <View style={{...styles.viewContainer,backgroundColor: color}}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableComp>
        </View>
    );
}


const styles = StyleSheet.create({
    gridView: {
        margin:15,
        height:widthOfScreen/2.5,
        width:widthOfScreen/2.5,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        overflow:"hidden"
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
    },
    title: {
        fontFamily:"Courgette",
        fontSize:18,
        textAlign:"right"
    }
});

export default CategoryGridTile;