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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

export default class componentName extends Component {
  render() {
    return (
      // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      //   <Text> Hi </Text>
      // </View>
      <AppContainer />
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeScreen,
    Create: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(AppNavigator);
