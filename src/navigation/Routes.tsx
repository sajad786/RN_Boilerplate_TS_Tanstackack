import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import { NavigationContainer } from '@react-navigation/native'

export default function Routes() {
  return (
    <NavigationContainer >
     {false ? AuthStack() : MainStack()}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})