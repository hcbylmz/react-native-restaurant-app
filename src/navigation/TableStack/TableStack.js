import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Tables from '../../pages/Tables/Tables';
import TableUpdate from '../../pages/Tables/TableUpdate';

export default function TableStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TablesPage"
        component={Tables}
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
        name="TableUpdatePage"
        component={TableUpdate}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Menu',
        }}
      />
    </Stack.Navigator>
  );
}
