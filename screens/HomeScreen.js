import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles/discoverStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Category} from './components/Explore/Category';
import {LongCategory} from './components/Explore/LongCategory';
import {CategoryText} from './components/Explore/CategoryText';
import {withNavigation} from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.SafeAreaView}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}> Discover</Text>
            </View>
            <View style={styles.searchBarContainer}>
              <Icon
                name="ios-search"
                size={20}
                color={'grey'}
                style={{marginHorizontal: 16}}
              />
              <TextInput
                placeholder="Search for podcasts or keywords"
                placeholderTextColor="grey"
                style={styles.placeHolderText}
              />
            </View>
          </View>

          <ScrollView scrollEventThrottle={16}>
            <View>
              <View
                style={{flex: 1, backgroundColor: '#FFFFFF', paddingTop: 16}}>
                <Text style={styles.secondaryTextHeading}>
                  Making your podcast
                </Text>
                <Text style={styles.descriptionTextHeading}>
                  Advice from the Anchor Production Team{' '}
                </Text>

                <View style={{height: 130, marginTop: 16}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Category
                      imageUri={require('./images/podcast_1.png')}
                      navigation={this.props.navigation}
                    />
                    <Category
                      imageUri={require('./images/podcast_2.png')}
                      navigation={this.props.navigation}
                    />
                    <Category
                      imageUri={require('./images/podcast_1.png')}
                      navigation={this.props.navigation}
                    />
                    <Category
                      imageUri={require('./images/podcast_2.png')}
                      navigation={this.props.navigation}
                    />
                  </ScrollView>
                </View>

                <View style={{marginTop: 32}}>
                  <View style={{paddingHorizontal: 16}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                      }}>
                      Episodes using Anchor
                    </Text>
                    <Text style={styles.descriptionTextHeading2}>
                      Get inspired by how other podcasters create
                    </Text>
                  </View>

                  <View style={{height: 120, marginTop: 16}}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      <CategoryText
                        imageUri={require('./images/music_icon.png')}
                        name="Background Music"
                      />

                      <CategoryText
                        imageUri={require('./images/voice_message.png')}
                        name="Voice Messages"
                      />

                      <CategoryText
                        imageUri={require('./images/music_icon.png')}
                        name="Background Music"
                      />

                      <CategoryText
                        imageUri={require('./images/voice_message.png')}
                        name="Voice Messages"
                      />
                    </ScrollView>
                  </View>
                </View>

                <View style={{marginTop: 32}}>
                  <View style={{paddingHorizontal: 16}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                      }}>
                      Made with Anchor
                    </Text>
                  </View>
                  <View style={{height: 130, marginTop: 16}}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      <LongCategory
                        imageUri={require('./images/made_by_anchor1.png')}
                        name="replyAll"
                        navigation={this.props.navigation}
                      />
                      <LongCategory
                        imageUri={require('./images/made_by_anchor2.png')}
                        name="replyAll"
                        navigation={this.props.navigation}
                      />
                      <LongCategory
                        imageUri={require('./images/made_by_anchor3.png')}
                        name="replyAll"
                        navigation={this.props.navigation}
                      />
                    </ScrollView>
                  </View>

                  <View style={{marginTop: 32}}>
                    <Text style={styles.secondaryTextHeading}>
                      Cool Podcast Ideas
                    </Text>
                  </View>

                  <View style={{height: 130, marginTop: 16, marginBottom: 16}}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      <Category
                        imageUri={require('./images/cool_podcast1.png')}
                        navigation={this.props.navigation}
                      />
                      <Category
                        imageUri={require('./images/cool_podcast2.png')}
                        navigation={this.props.navigation}
                      />
                      <Category
                        imageUri={require('./images/cool_podcast1.png')}
                        navigation={this.props.navigation}
                      />
                      <Category
                        imageUri={require('./images/cool_podcast2.png')}
                        navigation={this.props.navigation}
                      />
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

// export default HomeScreen;
export default withNavigation(HomeScreen);
