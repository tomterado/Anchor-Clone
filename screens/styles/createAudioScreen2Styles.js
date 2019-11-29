import React, {StyleSheet, Dimensions} from 'react-native';
var deviceWidth = Dimensions.get('window').width; //full width
var deviceHeight = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  container: {
    // backgroundColor: Colors.lighter
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordCircle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  recordCircleRed: {
    width: 75,
    height: 75,
    borderRadius: 37,
    backgroundColor: '#EB706D',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  recordCircleGreen: {
    width: 75,
    height: 75,
    borderRadius: 37,
    backgroundColor: '#68CFB6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  recordCirclePurple: {
    width: 75,
    height: 75,
    borderRadius: 37,
    backgroundColor: '#7E4DF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  recordCirclePink: {
    width: 75,
    height: 75,
    borderRadius: 37,
    backgroundColor: '#F2B1E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  recordCircleText: {
    color: '#FFFFFF',
  },
  videoBackground: {
    height: deviceHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  progressText: {
    // paddingTop: 50,
    fontSize: 30,
    color: '#fff',
  },
  textRow: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 36,
  },
});
