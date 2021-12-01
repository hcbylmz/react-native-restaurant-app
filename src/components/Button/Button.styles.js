import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

const base_styles = StyleSheet.create({
  container: {
    margin: spacing.large,
    padding: spacing.normal,
    borderRadius: radius.smooth,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default {
  default: StyleSheet.create({
    container: {
      ...base_styles.container,
      backgroundColor: '#37474f',
    },
    text: {
      ...base_styles.text,
      color: 'white',
    },
  }),

  outline: StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: '#37474f',
      ...base_styles.container,
    },
    text: {
      ...base_styles.text,
      color: '#37474f',
    },
  }),
};
