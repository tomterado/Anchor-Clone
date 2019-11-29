import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

export class Category extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ViewPodcast');
        }}
        style={{
          height: 130,
          width: 130,
          marginLeft: 16,
          borderWidth: 0.1,
          // borderRadius: 8,
          borderBottomColor: '#DDDDDD',
        }}>
        <View style={{flex: 2}}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover',
            }}
          />
        </View>

        {/* <View style={{ flex: 1, paddingLeft: 8, paddingTop: 8 }}>
          <Text> {this.props.name}</Text>
        </View> */}
      </TouchableOpacity>
    );
  }
}
export default withNavigation(Category);
