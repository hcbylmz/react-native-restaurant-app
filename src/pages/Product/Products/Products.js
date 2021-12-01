import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ProductCard from '../../../components/cards/ProductCard/ProductCard';
import mockData from '../../../MOCK_DATA.json';

export default function Products() {
  const navigation = useNavigation();

  function navigate(selectedProduct) {
    navigation.navigate('PrdctDtlPage', {product: selectedProduct});
  }

  return (
    <SafeAreaView>
      <FlatList
        data={mockData.products}
        renderItem={({item}) => (
          <ProductCard item={item} onSelect={() => navigate(item)} />
        )}
      />
    </SafeAreaView>
  );
}
