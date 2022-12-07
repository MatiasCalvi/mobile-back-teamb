import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screens/SignIn';


const StackNav = createNativeStackNavigator();


export default function Stack() {
    return ( 

    <StackNav.Navigator>
        <StackNav.Screen name="Sign In" component={SignIn} />
    </StackNav.Navigator>
    
    )
    
}