import { View, Text,StyleSheet,  Button } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function Cards() {
  return (
    <Card elevation={5} style={styles.card}>
        <Card.Cover style={styles.imageStore} key={'name'} source={require('../images/pruebaCiudad.jpg')}/>
        <Button  title='hola'style={styles.button}/>
    </Card>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
    },
    imageStore:{
        padding:18,
        backgroundColor:'white',
    },
})