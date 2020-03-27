import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DecksStackNavigator, AddDeckStackNavigator} from './TopStackNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'HOME';

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="HOME"
        component={DecksStackNavigator}
        options={{
          title: 'Decks',
        }}
      />
      <BottomTab.Screen
        name="ADDDECK"
        component={AddDeckStackNavigator}
        options={{
          title: 'Add Deck',
        }}
      />
    </BottomTab.Navigator>
  );
}
