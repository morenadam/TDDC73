import {StyleSheet, Dimensions} from 'react-native';

// change to prop
const myColor = 'teal';

export default StyleSheet.create({
  stepsLeftContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 0,
  },
  contentContainer: {
    width: Dimensions.get('window').width,
    flex: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stepContainer: {
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleCircle: {
    marginTop: 10,
    maxWidth: 50,
    fontSize: 12,
    paddingBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    width: '85%',
    position: 'absolute',
    top: 35,
    marginHorizontal: 20,
    left: 0,
  },
  circle: {
    borderWidth: 1,
    borderColor: myColor,
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    zIndex: 1,
  },
  circleTitle: {
    fontSize: 12,
    color: 'black',
  },
  selectedcircleTitle: {
    fontSize: 12,
    color: '#fff',
  },
});
