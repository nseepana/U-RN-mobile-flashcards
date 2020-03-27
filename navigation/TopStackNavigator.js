import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DeckInfoScreen from '../screens/DeckInfoScreen';
import AddCardScreen from '../screens/AddCardScreen';
import CreateDeckScreen from '../screens/CreateDeckScreen';
import QuizScreen from '../screens/QuizScreen';

const AddDeckStack = createStackNavigator();

const deckInfoScreenOptions = ({navigation}) => {
  return {
    title: 'Deck',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <HeaderBackButton
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'HOME'}],
          });
        }}
      />
    ),
  };
};

export function AddDeckStackNavigator() {
  return (
    <AddDeckStack.Navigator initialRouteName="ADDDECK">
      <AddDeckStack.Screen
        name="ADDDECK"
        options={{title: 'Add Deck'}}
        component={CreateDeckScreen}
      />
    </AddDeckStack.Navigator>
  );
}

const DecksStack = createStackNavigator();

export function DecksStackNavigator() {
  return (
    <DecksStack.Navigator>
      <DecksStack.Screen
        name="HOME"
        options={{title: '', headerTitleAlign: 'center'}}
        component={HomeScreen}
      />
      <DecksStack.Screen
        name="DECKINFO"
        options={deckInfoScreenOptions}
        component={DeckInfoScreen}
      />
      <DecksStack.Screen
        name="STARTQUIZ"
        options={{title: 'Start Quiz', headerTitleAlign: 'center'}}
        component={QuizScreen}
      />
      <DecksStack.Screen
        name="ADDCARD"
        options={{title: 'Add Card', headerTitleAlign: 'center'}}
        component={AddCardScreen}
      />
    </DecksStack.Navigator>
  );
}
