import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/store/Index';
import BudgetEntryScreen from './src/components/BudgetEntryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetEntryListingScreen from './src/components/BudgetEntryListingScreen';


const Stack = createStackNavigator();



const App = () => {
  const value = useSelector((s) => s.budget.entries);
  console.log("values  =>", value)
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
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
