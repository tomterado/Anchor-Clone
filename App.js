/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CreateAudioScreen from './screens/createAudioScreen';
import CreateAudioScreen2 from './screens/createAudioScreen2';

const HomeStack = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    ViewMedia: {
      screen: HomeScreen,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const CreateAudioStack = createSwitchNavigator(
  {
    CreateAudioStack1: {
      screen: CreateAudioScreen,
    },
    CreateAudioStack2: {
      screen: CreateAudioScreen2,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Create: CreateAudioStack,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
