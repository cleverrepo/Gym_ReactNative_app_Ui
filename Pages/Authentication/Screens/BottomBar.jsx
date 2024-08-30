import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import Home from './Home';
import Calendar from './Calendar';
import WorkOut from './WorkOut';
const BottomBar = () => {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator screenOptions={{
          headerShown:false
      }}>
          <Tab.Screen name='Home' component={Home} options={{
              tabBarIcon: ({ focused }) => (
                  <Ionicons name={ focused?"home":"home-outline"} size={25} color={"#FFC107"}/>
              )
          }}/>
          <Tab.Screen name='Calendar' component={Calendar} options={{
              tabBarIcon: ({ focused }) => (
                  <Ionicons name={ focused?"person":"person-outline"}  size={25} color={"#FFC107"}/>
              )
          }}/>
          <Tab.Screen name='WorkOut' component={WorkOut} options={{
              tabBarIcon: ({ focused }) => (
                  <Ionicons name={ focused?"calendar":"calendar-outline"}  size={25} color={"#FFC107"}/>
              )
          }}/>
    </Tab.Navigator>
  )
}

export default BottomBar

const styles = StyleSheet.create({})