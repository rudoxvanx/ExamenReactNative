/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Header} from 'react-native-elements'

import {NavigationContainer, StackActions, TabActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () =>  {
  return (
    <>
      {/*
      <NavigationContainer>
        <Drawer.Navigator>  
        <Drawer.Screen   name="Home"/>
          <Drawer.Screen name="Contacts" component={Screen1} children={createHomeStack}/>
          <Drawer.Screen name="Favorites" component={Screen2}/>
          <Drawer.Screen name="Settings" component={Screen3}/>
        </Drawer.Navigator>
      </NavigationContainer>*/}

      {/*<NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>*/}
         

          <NavigationContainer>
            <Tab.Navigator barStyle={{ backgroundColor: '#2980b9' }} labeled={true}>
              <Tab.Screen name="Home" component={HomeScreen} 
                   options={{tabBarLabel:'home',
                   tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              )}} />
              <Tab.Screen name="Search" 
                   component={SearchScreen}
                   options={{tabBarLabel:'search',
                   tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="text-search" color={color} size={26} />
              )}} />
              <Tab.Screen name="Profile" 
                   component={ProfileScreen} 
                   options={{tabBarLabel:'account',
                   tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              )}} />
            </Tab.Navigator>
          </NavigationContainer>
      </>
  );
};

const styles = StyleSheet.create({
});

export default App;
