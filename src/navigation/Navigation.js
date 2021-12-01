import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MenuStack from './MenuStack';
import TableStack from './TableStack';
import ProductsStack from './ProductsStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="ProductsStack"
          component={ProductsStack}
          options={{
            drawerLabel: 'Products',
            drawerIcon: ({size, color}) => (
              <Icon name="food-croissant" color={color} size={size} />
            ),
            drawerActiveTintColor: '#ab47bc',
          }}
        />
        <Drawer.Screen
          name="MenuStack"
          component={MenuStack}
          options={{
            drawerLabel: 'Menu',
            drawerIcon: ({size, color}) => (
              <Icon name="book-open-page-variant" color={color} size={size} />
            ),
            drawerActiveTintColor: '#ab47bc',
          }}
        />
        <Drawer.Screen
          name="TableStack"
          component={TableStack}
          options={{
            drawerLabel: 'Tables',
            drawerIcon: ({size, color}) => (
              <Icon name="table-furniture" color={color} size={size} />
            ),
            drawerActiveTintColor: '#ab47bc',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
