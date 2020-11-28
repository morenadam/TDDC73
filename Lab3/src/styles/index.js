import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10,
  },
  projectHeader: {
    paddingTop: 30,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  column: {
    flexDirection: 'column',
    margin: 40,
  },
});
