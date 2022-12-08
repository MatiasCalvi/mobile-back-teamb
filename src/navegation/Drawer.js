import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hotels from '../screens/drawer/Hotels';
import MyReactions from '../screens/drawer/MyReactions';
import Cities from '../screens/drawer/Cities';
import City from '../screens/City';

/* const StackNav = createNativeStackNavigator(); */
const DrawerNav= createDrawerNavigator()

export default function Drawer() {
  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name='Cities' component={Cities}/>
        <DrawerNav.Screen name='Hotels' component={Hotels}/>
        <DrawerNav.Screen name='MyReactions' component={MyReactions}/>
        <DrawerNav.Screen name='City'  component={City} options={{unmountOnBlur:true}}/>
    </DrawerNav.Navigator>
  )
}