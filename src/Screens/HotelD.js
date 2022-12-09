import { View, Text,StyleSheet,Dimensions,ImageBackground } from 'react-native'
import React, { useEffect, useState } from "react";
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios';
import {BASE_URL} from '../api/url'
import { useDispatch,useSelector } from 'react-redux';
import reactionsActions from '../redux/actions/reactionsActions';


const { height, width } = Dimensions.get("window");

const image = {
  uri: "https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default function City({route}) {

  const {HotelId}=route.params

  let [filter,setFilter]=useState([])
  let [shows,setShows]=useState([])

  let user=[]

  useEffect(()=>{
    axios.get(`${BASE_URL}/hotels`)
    .then(response=>setFilter(response.data.allcities.find((x) => x._id === cityId)))
  },[])

  let {name,capacity,photo,userId}=filter

  useEffect (()=>{
    axios.get(`${BASE_URL}/hotels`)
    .then(response=>setShows(response.data.hotels))
  },[])

  let show=shows.filter(e=>e.HotelId==HotelId)
  user.push(userId)

  /* ----------------------------------------------------------------------------------------------------------------- */

  

    const image = {
        uri: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      };
      
    const imageH = {
      uri: "https://media.timeout.com/images/105544308/750/422/image.jpg",
    };

    return ( 

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  width: '100%', backgroundColor:'lightgrey' }}>
             
                <View  >
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    
                        <View style={{ backgroundColor: 'grey', opacity: 0.9, left:42, width:360 , flex:1 ,}}>

                            <ScrollView  style={{ flex: 8, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor:'red'    }}>

                                <Image style={styles.tinyLogo} source={imageH}/>
                                <Text style={ styles.head.text2}> Nombre de hotel</Text>
                                <Text style={ styles.head.text2}> Capacidad </Text>
                   
                            </ScrollView >

                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginVertical:15, }}>
                            <Pressable style={styles.buttono}  >
                                <Text style={ styles.texto} onPress={(Redit)}>Back to hotels</Text>
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
  });