import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
    container: {
      margin: spacing.large,
    },
    input_container: {
      backgroundColor: '#e0e0e0',
      padding: spacing.normal,
      borderRadius: radius.sharp,
      borderWidth: 1,
      borderColor: '#bdbdbd',
    },
    label: {
      color: '#8d8d8d',
    },
  });