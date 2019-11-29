import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export class LongCategory extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ViewPodcast');
        }}
        style={{
          height: 130,
          width: 260,
          marginLeft: 16,
          // borderWidth: 0.5,
          // borderBottomColor: "#DDDDDD"
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
      </TouchableOpacity>
    );
  }
}
