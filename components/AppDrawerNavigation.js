import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SettingsScreen from '../screens/SettingsScreen';
import customSideBarMenu from '../components/customSideBarMenu';
import {bottomTabNavigator} from '../components/bottomTabNavigator';
import MyBartersScreen from '../screens/MyBartersScreen';

export const AppDrawerNavigation = createDrawerNavigator({
  '-' : {
    screen : bottomTabNavigator,
    },
    Home : {
      screen : bottomTabNavigator,
    },
    MyBarters:{
      screen : MyBartersScreen,
    },
    Settings : {
      screen : SettingsScreen
    }
    },
    {
      contentComponent:customSideBarMenu
    },
    {
      initialRouteName : 'Home',
     
    })