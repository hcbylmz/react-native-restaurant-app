import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default function Input({label, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput {...otherProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
