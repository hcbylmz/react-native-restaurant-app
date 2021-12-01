import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  label: {
    color: '#8d8d8d',
    fontSize: 12,
    marginVertical: 5,
  },
  ingredients: {
    flexDirection: 'row',
  },
  badge_container: {
    backgroundColor: '#37474f',
    margin: 3,
    borderRadius: 10,
    padding: 5,
  },
  badge_label: {
    fontSize: 10,
    color: '#e0e0e0',
    fontWeight: 'bold',
  },
});
