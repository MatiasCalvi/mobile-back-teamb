
import { View, Text,StyleSheet, Button,Pressable } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function Cards({name,photo,id,navigation}) {
    const image = {
        uri: photo,
      };
  return (
    <Card elevation={5} style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Card.Cover style={styles.imageStore} key={'name'} source={image}/>
        {/* <Button onPress={()=>navigation.navigate("City",{cityId: id})} title='Read more' style={styles.button}/> */}
        <Pressable style={styles.buttonCustom} onPress={()=>navigation.navigate("City",{cityId: id})}>
            <Text style={styles.textButton}>Read More</Text>
        </Pressable>
    </Card>
  )
}

const styles = StyleSheet.create({
    buttonCustom:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#00bfff',
    },
    textButton:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    card:{
        backgroundColor:'white',

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
        width:200
    }
})