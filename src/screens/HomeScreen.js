import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';
import {Header} from 'react-native-elements';
import Counter from './Counter'

export default function HomeScreen(){
  //console.log(navigation);
    return (
      <>
        <Header containerStyle={{backgroundColor: '#2980b9'}}
            leftComponent = {{icon:'menu',color:'#fff'}}
            centerComponent = {{text:'Rodolfo Fabian',style:{color:'#fff'}}}>
        </Header>   
        <Counter/>
      </>
    );

}