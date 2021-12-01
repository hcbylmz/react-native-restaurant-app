import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      borderWidth: 2,
      borderRadius: 10,
    },
    image: {
      height: Dimensions.get('window').height / 6,
    },
    name_label: {
      fontWeight: 'bold',
      margin: 5,
      textAlign: 'center',
      color: '#37474f',
    },
    name_container: {
      backgroundColor: '#a5d6a7',
      fontWeight: 'bold',
      textAlign: 'center',
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7,
    },
    order: {
      fontWeight: 'bold',
      margin: 5,
      fontSize: 10,
    },
  });