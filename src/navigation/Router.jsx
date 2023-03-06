import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack/';
import HomeScreen from '@/screens/Home'
import SearchScreen from '@/screens/Search'
import SearchResultsScreen from '@/screens/SearchResults'
import GuestsScreen from '@/screens/Guests'

const Stack = createNativeStackNavigator()
const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Find Your Air?'}} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        <Stack.Screen name="Guests" component={GuestsScreen} options={{ title: 'How many guest?'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router