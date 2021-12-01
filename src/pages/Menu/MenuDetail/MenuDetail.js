import {useRoute} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import styles from './MenuDetail.styles';

export default function MenuDetail() {
  const route = useRoute();
  const {fd} = route.params;

  const renderIngredients = item => {
    return (
      <View style={styles.badge_container}>
        <Text style={styles.badge_label}>{item}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>Name: {fd.name}</Text>
        <Text style={styles.label}>Description: {fd.description}</Text>
        <Text style={styles.label}>Price: {fd.price}</Text>
        <Text style={styles.label}>Ingredients:</Text>
        <View style={styles.ingredients}>
          {fd.ingredients.split(',').map(renderIngredients)}
        </View>
      </View>
    </SafeAreaView>
  );
}
