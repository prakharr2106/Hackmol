import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import {gestureHandlerRootHOC} from 'react-native-gesture-handler'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hides the default title bar
      }}
    />
  )
}

export default Layout