import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from 'react'

export default function SignUp() {
    const handleSubmit = () => {
        console.log ('Logeado')
    }
    return ( 

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Text> Sign Up</Text>
                <TextInput placeholder='Name'/>
                <TextInput placeholder='Last Name'/>
                <TextInput placeholder='Email'/>
                <TextInput placeholder='Password'/>
                <TextInput placeholder='Age'/>
                <TextInput placeholder='Country'/>
                <Button onPress={handleSubmit} title='Register'/>
            </View>
        </View>
    

    
    )
    
}

const style = StyleSheet.create({

})