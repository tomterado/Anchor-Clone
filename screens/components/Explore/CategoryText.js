import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export class CategoryText extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 16,
          borderWidth: 0.1,
          // borderRadius: 8,
          borderBottomColor: "#DDDDDD"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover"
            }}
          />
        </View>

        <View style={{ flex: 1, paddingLeft: 8, paddingTop: 8 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#9F9F9F"
            }}
          >
            {" "}
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}
