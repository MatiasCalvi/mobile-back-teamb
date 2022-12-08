import { View, Text,StyleSheet,  Button } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function Cards() {
  return (
    <Card elevation={5} style={styles.card}>
        <Text style={styles.title}>Petonia</Text>
        <Card.Cover style={styles.imageStore} key={'name'} source={require('../components/carrousel/data/assets/7.jpg')}/>
        <Button  title='Read more'style={styles.button}/>
    </Card>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        marginBottom: 10,
    },
    imageStore:{
        padding:18,
        backgroundColor:'white',
    },
    title:{
        textAlign:'center',
        fontWeight: "bold",
        paddingTop: 10,
    },
    button:{
        
    }
})