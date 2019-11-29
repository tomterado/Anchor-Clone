import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles/viewMediaStyles';
import {ScrollView} from 'react-native-gesture-handler';

class ViewPodcast extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBlackContainer}>
          <View style={styles.contentDescriptionRow}>
            <Image source={require('./images/podcast_1.png')} />
            <View style={styles.contentDescriptionText}>
              <Text style={styles.contentDescriptionTextHeading}>
                Recording and Microphones
              </Text>
              <Text style={styles.contentDescriptionTextParagraph}>
                29 NOV 2019 - 13:48 - S1E2
              </Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.aboutContentContainer}>
            <View style={styles.aboutContentContainerDivider}>
              <Text style={styles.aboutContentContainerDividerText}>
                About this episode{' '}
              </Text>
            </View>
            <View style={styles.aboutContentContainerText}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{' '}
              </Text>
            </View>
          </View>
          <View style={styles.aboutContentContainer}>
            <View style={styles.aboutContentContainerDivider}>
              <Text style={styles.aboutContentContainerDividerText}>
                Segments
              </Text>
            </View>
            <View style={styles.contentDescriptionRow}>
              <Image
                source={require('./images/play_button.png')}
                style={styles.playButton}
              />
              <View style={styles.textRecordingContent}>
                <Text> Recording and Microphones</Text>
                <Text style={styles.softerTimeText}> 13:14</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ViewPodcast;
