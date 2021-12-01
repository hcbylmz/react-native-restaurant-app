import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 3,
  },
  image: {
    backgroundColor: '#bdbdbd',
    height: deviceSize.height / 6,
  },
  name_label: {
    fontWeight: 'bold',
    margin: 5,
  },
  add_button_container: {
    bottom: 15,
    right: 5,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: '#039be5',
  },
});
