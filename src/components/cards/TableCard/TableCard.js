import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default function MenuCard({item, onSelect}) {
  const tableColor = item.isActive ? 'green' : '#bdbdbd';

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[styles.container, {borderColor: tableColor}]}>
        <View style={styles.image}>
          {item.orders.map((order, i) => (
            <Text key={i} style={styles.order}>
              ⏺ {order.name}
            </Text>
          ))}
        </View>
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
