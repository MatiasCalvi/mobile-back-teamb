import { View, Text,StyleSheet,Dimensions,ImageBackground, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from "react";
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios';
import {BASE_URL} from '../api/url'
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';



const { height, width } = Dimensions.get("window");

const image = {
  uri: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default function HotelDetail({route}) {
  
  function ScreenToNavigateFrom() {
  const navigation = useNavigation();

  const {hotelId}=route.params
  let [filter,setFilter]=useState([])
  let a = productID
  console.log(a)

  useEffect(()=>{
      axios.get(`${BASE_URL}/hotels`)
      .then(response=>setFilter(response.data.allhotels.find((x) => x._id === hotelId)))
  },[])

  const {name,photo,capacity} = route.params
  

 
  console.log(44,show)
  user.push( 55, userId)
  console.log(66, photo)

  

  /* ----------------------------------------------------------------------------------------------------------------- */

  



    return ( 

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  width: '100%', backgroundColor:'lightgrey' }}>
             
                <View  >
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    
                        <View style={{ backgroundColor: 'grey', opacity: 0.9, left:42, width:360 , flex:1 ,}}>

                            <ScrollView  style={{ flex: 1, backgroundColor:'red'    }}>
                            <detailsHotels name={name} capacity={capacity} photo={photo[0]} navigation={navigation} />
                   
                            </ScrollView >

                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginVertical:15, }}>
                            <Pressable style={styles.buttono}  >
                                <Text style={ styles.texto} >Back to hotels</Text>
                            </Pressable>
                            </View>
                    
                        </View>
                    
                    </ImageBackground>
                </View>
        </View>
    
        
    
    )
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
        image: {
            flex: 1,
            justifyContent: "center",
            opacity: 0.8,
            width: "100%",
            left:-36,
          },
    search: {
        marginTop: 20,
        textAlign: 'center',
        backgroundColor: 'lightblue' ,
        width: '80%',
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 25,
     
      },
    button: {
      fontSize: 28,
      marginVertical: 12,
      color: '#333',
      paddingVertical: 15,
    },
    text: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      width: '80%'
      
    },
    head: {
        text2: {

            width: '100%',
            fontSize: 32,
            fontWeight: 'bold',
          color: "white",
          lineHeight: 60,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#000000c0",
          textTransform: "uppercase",  
        },
      },

      buttono: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 5,
        width: '80%',
      },
      texto: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      tinyLogo: {
        borderColor: 'gold',
        borderWidth: 5,
        width:300,
        height:300,
        borderRadius: 25,
      },
      text: {
        text2: {
            
          fontSize: 14,
          color: "white",
          lineHeight: 60,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#000000c0",
          textTransform: "uppercase",
        },
        color: "white",
        fontSize: 22,
        lineHeight: 60,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        textTransform: "uppercase",
      },
      span:{
        fontWeight:'bold',
      },
  })  };