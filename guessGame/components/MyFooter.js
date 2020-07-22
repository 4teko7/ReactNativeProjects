import React, { Component } from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import colors from '../constants/color';

//Components
import Card from './Card';
import MyTitle from './MyTitle';
import Hr from './Hr';
import MyText from './MyText';

//style = {{...styles.screen, position:"absolute",bottom:200,width:"100%"}}

//Constants
import footer from "../constants/footer";

const {width, height} = Dimensions.get('window')

export class MyFooter extends Component {
    
    render() {
        const title = footer.name + " " + footer.desc;
        return (
            <View style={{...styles.screen, position:"absolute",bottom:10,width:"100%"}} >
                <Card style={styles.card}>
                    <MyTitle title={title} />
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
    }
});

export default MyFooter
