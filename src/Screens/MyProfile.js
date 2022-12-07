import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Home() {
    
    const Tab = createBottomTabNavigator();

    return ( 

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                    <Text> My Profile</Text>
            </View>
        </View>
    
    )
    
}

const style = StyleSheet.create({

})