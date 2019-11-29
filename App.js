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
import CreateAudioScreen3 from './screens/createAudioScreen3';
import ViewPodcast from './screens/ViewPodcast';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    ViewPodcast: {
      screen: ViewPodcast,
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
      screen: CreateAudioScreen3,
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
    Home: {
      screen: HomeStack,
      navigationOptions: {
        labeled: false,
        tabBarIcon: ({tintColor, focused}) => (
          <Icon style={[{color: tintColor}]} size={20} name={'ios-home'} />
        ),
      },
    },
    Create: {
      screen: CreateAudioStack,
      navigationOptions: {
        labeled: false,
        tabBarIcon: ({tintColor, focused}) => (
          <Icon style={[{color: '#FFFFFF'}]} size={25} name={'md-add'} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#ffffff',
    barStyle: {backgroundColor: '#7F4BF1'},
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
