// In App.js in a new project

import * as React from 'react';

import {Text, View} from 'react-native';

import CardBillingScreen from './src/screens/CardBillingScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import {NavigationContainer} from '@react-navigation/native';
import WithdrawalScreen from './src/screens/WithdrawalScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Card">
        <Stack.Screen name="Card" component={CardBillingScreen} />
        <Stack.Screen name="Withdrawal" component={WithdrawalScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
