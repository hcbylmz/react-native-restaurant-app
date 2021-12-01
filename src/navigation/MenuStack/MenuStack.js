import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Menu from '../../pages/Menu/Menu';
import MenuDetail from '../../pages/Menu/MenuDetail';
import CreateMenu from '../../pages/Menu/CreateMenu';

const Stack = createNativeStackNavigator();

export default function MenuStck() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuPage"
        component={Menu}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Menu',
        }}
      />
      <Stack.Screen
        name="CreateMenuPage"
        component={CreateMenu}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Create Menu',
        }}
      />
      <Stack.Screen
        name="MenuDetailPage"
        component={MenuDetail}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Menu Detail',
        }}
      />
    </Stack.Navigator>
  );
}
