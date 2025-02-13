import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home/Home';
import Posts from '../screens/Posts/Posts';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type Props = {}

const BottomTabs = (props: Props) => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   if (route.name === 'Home') {
        //     iconName = focused
        //       ? 'ios-information-circle'
        //       : 'ios-information-circle-outline';
        //   } else if (route.name === 'Settings') {
        //     iconName = focused ? 'ios-list' : 'ios-list-outline';
        //   }

        //   // You can return any component that you like here!
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Posts" component={Posts} />
    </Tab.Navigator>
  )
}

export default BottomTabs
