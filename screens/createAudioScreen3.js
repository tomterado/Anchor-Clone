import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';

import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Video from 'react-native-video';
import styles from './styles/createAudioScreen2Styles';

class CreateAudioScreen3 extends Component {
  state = {
    currentTime: 0.0,
    recording: false,
    paused: false,
    stoppedRecording: false,
    finished: false,
    audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
    hasPermission: undefined,
  };

  prepareRecordingPath(audioPath) {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: 'Low',
      AudioEncoding: 'aac',
      AudioEncodingBitRate: 32000,
    });
  }

  componentDidMount() {
    AudioRecorder.requestAuthorization().then(isAuthorised => {
      this.setState({hasPermission: isAuthorised});

      if (!isAuthorised) return;

      this.prepareRecordingPath(this.state.audioPath);

      AudioRecorder.onProgress = data => {
        this.setState({currentTime: Math.floor(data.currentTime)});
      };

      AudioRecorder.onFinished = data => {
        // Android callback comes in the form of a promise instead.
        if (Platform.OS === 'ios') {
          this._finishRecording(
            data.status === 'OK',
            data.audioFileURL,
            data.audioFileSize,
          );
        }
      };
    });
  }

  _renderButton(title, onPress, active) {
    var style = active ? styles.activeButtonText : styles.buttonText;

    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{color: '#FFFFFF'}}>{title}</Text>
      </TouchableOpacity>
    );
  }

  _renderPauseButton(onPress, active) {
    var style = active ? styles.activeButtonText : styles.buttonText;
    var title = this.state.paused ? 'RESUME' : 'PAUSE';
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    );
  }

  async _pause() {
    if (!this.state.recording) {
      console.warn("Can't pause, not recording!");
      return;
    }

    try {
      const filePath = await AudioRecorder.pauseRecording();
      this.setState({paused: true});
    } catch (error) {
      console.error(error);
    }
  }

  async _resume() {
    if (!this.state.paused) {
      console.warn("Can't resume, not paused!");
      return;
    }

    try {
      await AudioRecorder.resumeRecording();
      this.setState({paused: false});
    } catch (error) {
      console.error(error);
    }
  }

  async _stop() {
    if (!this.state.recording) {
      console.warn("Can't stop, not recording!");
      return;
    }

    this.setState({stoppedRecording: true, recording: false, paused: false});

    try {
      const filePath = await AudioRecorder.stopRecording();

      if (Platform.OS === 'android') {
        this._finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  async _play() {
    if (this.state.recording) {
      await this._stop();
    }

    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    setTimeout(() => {
      var sound = new Sound(this.state.audioPath, '', error => {
        if (error) {
          console.log('failed to load the sound', error);
        }
      });

      setTimeout(() => {
        sound.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }, 100);
    }, 100);
  }

  async _record() {
    if (this.state.recording) {
      console.warn('Already recording!');
      return;
    }

    if (!this.state.hasPermission) {
      console.warn("Can't record, no permission granted!");
      return;
    }

    if (this.state.stoppedRecording) {
      this.prepareRecordingPath(this.state.audioPath);
    }

    this.setState({recording: true, paused: false});

    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  }

  _finishRecording(didSucceed, filePath, fileSize) {
    this.setState({finished: didSucceed});
    console.log(
      `Finished recording of duration ${
        this.state.currentTime
      } seconds at path: ${filePath} and size of ${fileSize || 0} bytes`,
    );
  }

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
        <View>
          <View style={styles.textRow}>
            <Text style={styles.progressText}>{this.state.currentTime}s</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
            //   style={styles.recordCircle}
            //             onPress={() => console.log('Pressed Record')}
            >
              {/* <Text style={styles.recordCircleText}> Play</Text> */}
              <View style={styles.recordCircleRed}>
                {this._renderButton(
                  'Record',
                  () => {
                    this._record();
                  },
                  this.state.recording,
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.recordCircleGreen}>
                {this._renderButton('Play', () => {
                  this._play();
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.recordCirclePurple}>
                {this._renderButton('Stop', () => {
                  this._stop();
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.recordCirclePink}>
                {this._renderButton('Pause', () => {
                  this._pause();
                })}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CreateAudioScreen3;

// {
//   this._renderButton('PLAY', () => {
//     this._play();
//   });
// }
// {
//   this._renderButton('STOP', () => {
//     this._stop();
//   });
// }
// {
//   /* {this._renderButton("PAUSE", () => {this._pause()} )} */
// }
// {
//   this._renderPauseButton(() => {
//     this.state.paused ? this._resume() : this._pause();
//   });
// }
// <Text style={styles.progressText}>{this.state.currentTime}s</Text>;
