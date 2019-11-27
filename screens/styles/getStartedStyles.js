import React, {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter
    backgroundColor: '#282F37',
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#FFFFFF',
  },
  mainHeadingText: {
    color: '#BEC0C2',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  bottomHeadingText: {
    color: '#BEC0C2',
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: '600',
    fontSize: 12,
  },
  secondaryHeadingText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'left',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#282F37',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  wrapper: {
    height: 300,
    // backgroundColor: "#962EFF"
  },
  slide1: {
    // flex: 1,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#9DD6EB"
  },
  slide2: {
    // flex: 1,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#97CAE5"
  },
  slide3: {
    // flex: 1,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#92BBD9"
  },
  explainerRow: {
    flexDirection: 'row',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: '#B8BABC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#282F37',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  getStartedCircle: {
    borderRadius: 8,
    width: 100,
    // height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
    padding: 10,
    marginVertical: 32,
  },
  getStartedCircleText: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
  },
});
