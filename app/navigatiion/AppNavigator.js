import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListingEditScreen } from '../screens/ListingEditScreen';
import { ListingsScreen } from '../screens/ListingsScreen';
import { MyAccountScreen } from '../screens/MyAccountScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listind" component={ListingsScreen} />
      <Tab.Screen name="ListindEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={MyAccountScreen} />
    </Tab.Navigator>
  );
};
