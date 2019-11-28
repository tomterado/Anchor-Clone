import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Butto,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/createAudioScreen2Styles';
import LottieView from 'lottie-react-native';

class createAudioScreen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LottieView
          style={{height: '100%'}}
          source={require('./images/1711-waves.json')}
          autoPlay
          loop></LottieView>
      </View>
    );
  }
}

export default createAudioScreen2;
