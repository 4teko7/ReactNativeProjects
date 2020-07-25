import React, { Component } from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native';

//Components
import Card from './Card';
import MyTitle from './MyTitle';

//style = {{...styles.screen, position:"absolute",bottom:200,width:"100%"}}

//Constants
const name = "BILAL TEKIN"
const desc = "All Rights Reserved."

const {width, height} = Dimensions.get('window')

export class MyFooter extends Component {
    
    render() {
        const title = name + " - " + desc;
        return (
            <View style={{...styles.screen, position:"absolute",bottom:10,width:"100%"}} >
                <Card style={styles.card}>
                    <MyTitle style={styles.title} title={title} />
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        alignItems:"center",
        justifyContent:"center"
        
    },
    card: {
        width:"90%",
        elevation:20,
    },
    title: {
        fontFamily:"PlayfairDisplay"
    }
});

export default MyFooter
