import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Wrapper,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/createAudioScreen2Styles';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';
import Video from 'react-native-video';

AudioRecorder.prepareRecordingAtPath(audioPath, {
  SampleRate: 22050,
  Channels: 1,
  AudioQuality: 'Low',
  AudioEncoding: 'aac',
});

const audioTest = (AudioRecorder.onProgress = data => {
  console.log(data.currentMetering, data.currentPeakMetering);
});

class createAudioScreen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require('./images/1711-waves.mp4')} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.videoBackground}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={0.5}
          ignoreSilentSwitch={'obey'}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.recordCircle}
            onPress={() => console.log('Pressed Record')}>
            <Text style={styles.recordCircleText}> Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recordCircle}
            onPress={() => console.log('Pressed Record')}>
            <Text style={styles.recordCircleText}> Record</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recordCircle}
            onPress={() => console.log('Pressed Record')}>
            <Text style={styles.recordCircleText}> Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default createAudioScreen2;
