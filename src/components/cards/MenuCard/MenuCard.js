import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MenuCard.styles';

export default function MenuCard({item, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.imageURL}} />
        <Text style={styles.name_label}>{item.name}</Text>
        <View style={styles.add_button_container}>
          <Icon name="plus" color="white" size={25} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
