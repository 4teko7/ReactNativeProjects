import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const Header = props =>{

    return (
        <View style= {{...styles.header,...props.viewStyle}}>
            <Text style={{...styles.headerTitle,...props.textStyle}}>
                {props.title} 
                <Text> </Text>
                <Image source={require('../assets/images/tic.png')} style={styles.image} />
            </Text>
            
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop:36,
        backgroundColor: "#f7287b",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black",
        fontSize: 18
    },
    image: {
        width:20,
        height:20,
        padding:50
    }
});

export default Header;