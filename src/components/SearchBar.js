import { View, Text,StyleSheet,TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import { color } from 'react-native-reanimated'

export default function SearchBar({style,onChangeText}) {
    let [query,setQuery]=useState()
    let [text,setText]=useState('')

    let listen=(e)=>{
        onChangeText(e)
    }

  return (
    <View style={styles.container}>
        <View style={styles.searchBarContainer}>
            <View style={styles.vwSearch}>
                <Image resizeMode='center' style={styles.icSearch} source={require('../components/carrousel/data/assets/ic_search.png')}/>
            </View>
            <TextInput style={styles.searchBarInput} onChangeText={listen} />
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    vwSearch:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00bfff',
        width:40,
    },
    searchBarInput:{
        height:'100%',
        backgroundColor:'#fff',
        width:'100%',
        color:'black',
        fontWeight: "bold",
        margin:0
    },
    icSearch:{
        height:'100%',
        width:'100%',
    },
    searchBarContainer:{
        width:'90%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
    },  
    container:{
        height:50,
        alingItems:'center'
    }
})