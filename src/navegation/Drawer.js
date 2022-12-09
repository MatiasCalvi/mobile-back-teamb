import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Hotels from '../screens/drawer/Hotels';
import MyReactions from '../screens/drawer/MyReactions';
import Cities from '../screens/drawer/Cities';
import City from '../screens/City';
import SignUp from '../screens/SignUp';
import Profile from '../screens/drawer/Profile';
import SignIn from '../screens/SignIn';

import { StyleSheet } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch,useSelector } from 'react-redux';
import userActions from "../redux/actions/userActions";
import Home from "../screens/Home"

/* const StackNav = createNativeStackNavigator(); */
const DrawerNav= createDrawerNavigator()


export default function Drawer() {

  let {enterAgain}= userActions
   
  let dispatch = useDispatch()

  let { logged, role ,id,token } = useSelector(store => store.usuario)
  
  
  useEffect(()=>{

    AsyncStorage.getItem('token')
         .then(data=>JSON.parse(data))
         .then(send=>dispatch(enterAgain(send.token.user)))
         .catch(e=>console.log(e))
    
  },[])

  console.log(logged)

  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name='Home' component={Home}/>
        <DrawerNav.Screen name='Cities' component={Cities}/>
        <DrawerNav.Screen name='Hotels' component={Hotels}/>
        {logged
              ?<DrawerNav.Screen name='Profile' component={Profile}/>
              :<></>}
        {logged
            ?<DrawerNav.Screen name='MyReactions' component={MyReactions}/>
            :<></>}
        <DrawerNav.Screen name='City' component={City}/>
        <DrawerNav.Screen name='SignUp' component={SignUp}/>
        {!logged
            ?<DrawerNav.Screen name='SignIn' component={SignIn}/>
            :<></>}
    </DrawerNav.Navigator>
  )
}
