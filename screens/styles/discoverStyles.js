import React, { StyleSheet } from "react-native";

export default StyleSheet.create({
  SafeAreaView: {
    height: 110,
    backgroundColor: "#FFFFFF"
    // borderBottomWidth: 1,
    // borderBottomColor: "#DDDDDD"
  },
  searchBarContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#F3F3F4",
    marginHorizontal: 16,
    borderRadius: 16
  },
  placeHolderText: {
    flex: 1,
    backgroundColor: "#F3F3F4"
  },
  headingText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000"
  },
  headingContainer: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: "#FFFFFF",
    marginLeft: 16
  },
  secondaryTextHeading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    marginHorizontal: 16
  },
  descriptionTextHeading: {
    fontSize: 12,
    color: "#9F9F9F",
    marginHorizontal: 16
  },
  descriptionTextHeading2: {
    fontSize: 12,
    color: "#9F9F9F"
  }
});
