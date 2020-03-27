import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
// import {PushNotification} from './PushNotification';

const Stack = createStackNavigator();

export default function App() {
  const containerRef = React.useRef();
  return (
    <View style={styles.container}>
      {/* push notification logic for local
      <PushNotification />
       */}
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <NavigationContainer ref={containerRef}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Root"
            component={BottomTabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
