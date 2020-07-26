import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import loadFonts from './util/loadFonts';
import {AppLoading} from 'expo';

export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false);
  const componentDidMount = async () =>{
    await loadFonts();
  }

  if(!fontLoaded){
    return (
      <AppLoading
        startAsync={componentDidMount}
        onFinish={() => {setFontLoaded(true)}}
        onError={console.warn}
      />
    );
  }else{
    return (
      (
        <View>
          <View style={styles.container}>
            <Text style={{fontFamily:"Yanone"}}>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
        </View>
      )
    );
  }
  
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
