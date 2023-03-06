import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/Home'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tabs = createBottomTabNavigator()
const HomeTabNavigator = props => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: '#f15454'}}>
      <Tabs.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="Air"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="cloudy" size={25} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={25} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  )
}

export default HomeTabNavigator