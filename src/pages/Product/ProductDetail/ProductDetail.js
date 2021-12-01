import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View, SafeAreaView, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ProductDetail.styles';

export default function ProductDetail() {
  const route = useRoute();

  const {product} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: product.imageURL,
          }}
        />
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{product.name}</Text>
          {product.isPopular && <Icon name="star" color="orange" size={25} />}
        </View>
        <ScrollView horizontal bounces={false}>
          {product.ingredients.map((ing, ind) => {
            return (
              <View style={styles.badge_container}>
                <Text style={styles.badge_label}>{ing}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.description_container}>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Text style={styles.price}>{product.price} TL</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
