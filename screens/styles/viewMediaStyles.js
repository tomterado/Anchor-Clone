import React, {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // backgroundColor: Colors.lighter
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBlackContainer: {
    // flex: 1,
    backgroundColor: '#2A2F35',
    // height: 350,
    width: '100%',
  },
  contentDescriptionRow: {
    flexDirection: 'row',
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  contentDescriptionText: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  contentDescriptionTextHeading: {
    fontWeight: '600',
    color: '#FFFFFF',
  },
  contentDescriptionTextParagraph: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  scrollViewContainer: {
    flex: 11,
  },
  aboutContentContainer: {
    backgroundColor: '#FFFFFF',
    // padding: 16,
  },
  aboutContentContainerText: {
    // backgroundColor: '#FFFFFF',
    padding: 16,
  },
  aboutContentContainerDivider: {
    backgroundColor: '#efefef',
    height: 30,
  },
  aboutContentContainerDividerText: {
    paddingLeft: 16,
    paddingVertical: 8,
    fontWeight: '600',
  },
  playButton: {
    width: 50,
    height: 50,
    paddingHorizontal: 16,
  },
  textRecordingContent: {
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  softerTimeText: {
    color: '#9d9d9d',
    fontSize: 12,
  },
});
