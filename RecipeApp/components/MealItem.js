import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from "react-native";

const MealItem = (props) => {
    const {id,title,onSelectMeal,duration,complexity,affordability,image} = props;
    console.log("IMAGE : " , image)
  return (
    <View style={styles.grandParentView}>
        <TouchableOpacity onPress={onSelectMeal} style={styles.touchable} onPress={onSelectMeal}>
            <View style={styles.parentView}>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground source={{uri: image}} style={styles.bgImage}>
                    <View style={{backgroundColor:"rgba(0,0,0,0.6)",width:"100%",alignItems:"center"}}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                    </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetail}}>
                    <Text style={styles.belowInfosText}>{duration}m</Text>
                    <Text style={styles.belowInfosText}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.belowInfosText}>{affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    grandParentView: {
        overflow:"hidden",

    },
    touchable: {
        flex:1,
        height:230,
        marginVertical:10,
        marginHorizontal:10,
        backgroundColor:"#aaa",
        borderRadius:20,
        shadowColor:"black",
        shadowOpacity:0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius:10,
        elevation:5

    },
    mealRow: {
        flexDirection:"row",
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    mealHeader: {
        height:"80%",
        width:"100%",
        overflow:"hidden",
    },
    mealDetail: {
        height:"20%",
        justifyContent:"space-between",
        paddingHorizontal:10,
    },
    parentView: {
        width:"100%",
        overflow:"hidden"
    },
    title: {
        fontSize:28,
        fontFamily:"Courgette",
        color:"white"
    },
    belowInfosText: {
        fontFamily:"Courgette",
        fontSize:17
    },
    bgImage: {
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"flex-end",
    }
});

export default MealItem;
