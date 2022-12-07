import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from 'react'

export default function SignIn() {
    const handleSubmit = () => {
        console.log ('Logeado')
    }
    return ( 

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Text> Sign in</Text>
                <TextInput placeholder='Email'/>
                <TextInput placeholder='Password'/>
                <Button onPress={handleSubmit} title='Enter'/>
                <Text>or if you have an account</Text>
                <Button onPress={handleSubmit} title='Sign Up'/>
            </View>
        </View>
    

    
    )
    
}

const style = StyleSheet.create({

})