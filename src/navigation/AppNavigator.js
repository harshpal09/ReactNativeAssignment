import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetEntryScreen from '../components/BudgetEntryScreen';
import BudgetEntryListingScreen from '../components/BudgetEntryListingScreen';

const Stack = createStackNavigator();


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BudgetEntry">
        <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} />
        <Stack.Screen
          name="BudgetEntryListing"
          component={BudgetEntryListingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})