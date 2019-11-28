import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  Butto,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles/getStartedStyles';
// import Record from './record';

class CreateAudioScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('./images/iphone_full_bk.png')}>
          <View style={{top: 25, padding: 50}}>
            <Text style={styles.mainHeadingText}>
              How to start your podcast in {'\n'} 4 easy steps
            </Text>
          </View>

          <Swiper autoplay style={styles.wrapper}>
            <View style={styles.slide2}>
              <View style={styles.explainerRow}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>1</Text>
                </View>
                <View style={{paddingLeft: 16}}>
                  <Text style={styles.secondaryHeadingText}>
                    Record or import some audio
                  </Text>
                </View>
              </View>

              <Image
                style={{marginTop: '50%'}}
                source={require('./images/microphone.png')}
              />
            </View>
            <View style={styles.slide2}>
              <View style={styles.explainerRow}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>2</Text>
                </View>
                <View style={{paddingLeft: 15}}>
                  <Text style={styles.secondaryHeadingText}>
                    Build your episode out of as {'\n'}many segments as you
                    want.
                  </Text>
                </View>
              </View>
              <Image
                style={{marginTop: '30%'}}
                source={require('./images/tiles.png')}
              />
            </View>

            <View style={styles.slide2}>
              <View style={styles.explainerRow}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>3</Text>
                </View>
                <View style={{paddingLeft: 15}}>
                  <Text style={styles.secondaryHeadingText}>
                    Distribute your podcast{'\n'}everywhere, with just one tap.
                  </Text>
                </View>
              </View>
              <Image
                style={{marginTop: '20%'}}
                source={require('./images/network.png')}
              />
            </View>
            <View style={styles.slide2}>
              <View style={styles.explainerRow}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>4</Text>
                </View>
                <View style={{paddingLeft: 15}}>
                  <Text style={styles.secondaryHeadingText}>
                    Start getting listeners!
                  </Text>
                </View>
              </View>
              <Image
                style={{marginTop: '40%'}}
                source={require('./images/people.png')}
              />
            </View>
          </Swiper>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.getStartedCircle}
              onPress={() =>
                this.props.navigation.navigate('CreateAudioStack2')
              }>
              <Text style={styles.getStartedCircleText}>Get Started</Text>
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity
            style={{
              position: "absolute",
              bottom: -20,
              left: 150
            }}
          >
            <Image style={{}} source={require("./images/add_button.png")} />
          </TouchableOpacity> */}
        </ImageBackground>
      </View>
    );
  }
}

export default CreateAudioScreen;
