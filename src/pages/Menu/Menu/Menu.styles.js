import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    backgroundColor: '#e0e0e0',
  },
  name_label: {
    fontWeight: '200',
    fontSize: 25,
  },
  name_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  description: {
    margin: 5,
    fontSize: 12,
  },
  description_container: {
    flex: 1,
  },
});
