import React, { Component } from "react";
import { Text, View } from "react-native";

function elapsedTime() {
  return "0:00";
}

export class ElapsedTime extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            color: "#FFF",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 1
          }}
        >
          {elapsedTime()}
        </Text>
      </View>
    );
  }
}
