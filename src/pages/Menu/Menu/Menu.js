import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import styles from './Menu.styles';
import MenuCard from '../../../components/cards/MenuCard';

import mockData from '../../../MOCK_DATA.json';

export default function Menu() {
  const navigation = useNavigation();

  function handleNavigateMenuCreate(selectedMenu) {
    navigation.navigate('CreateMenuPage', {menu: selectedMenu});
  }

  const renderMenu = ({item}) => (
    <MenuCard item={item} onSelect={() => handleNavigateMenuCreate(item)} />
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList data={mockData.menu} renderItem={renderMenu} />
        </View>
      </SafeAreaView>
    </View>
  );
}
