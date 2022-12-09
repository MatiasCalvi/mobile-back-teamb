import { View, Text, Image, ImageBackground,StyleSheet,Dimensions } from "react-native";
import React from "react";
import Reactions1 from '../Reactions/Reactions1'

const { height, width } = Dimensions.get("window");

export default function SectionDetailsDos({itinerary,array}) {

  let {description,name,photo,duration,price}=itinerary
  
 

  const image = {
    uri: photo[0],
  };

  return (<>
       
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Image style={styles.image} source={image}/>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.containerPrice}>
                    <Text style={styles.price}>Price: ${price}</Text>
                    <Text style={styles.duration}>Duration: {duration} hrs</Text>
                </View>
                <View style={styles.containerReaction}>
                    <Reactions1 array={array}/>
                </View>
            </View>
      
  </>);
}

const styles = StyleSheet.create({
    image: {
      height:200,
      width:300
    },
    containerReaction:{
      width:300,
      justifyContent:'center',
      marginTop:20
    },
    content: {
      flex: 0.2,
      alignItems: 'center',
      paddingTop:30
    },
    containerPrice:{
      flexDirection:"row",
      backgroundColor:'#000',
      width:300,
      justifyContent:'center',
      paddingTop:10,
      paddingBottom:10,
    },
    title: {
      marginTop: 12,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      paddingBottom:20,
      textTransform: "uppercase",
    },
    description: {
      fontSize: 16,
      marginVertical: 12,
      color: '#333',
      width:300,
      paddingTop:5,
      paddingBottom:5,
      textAlign:'center'
    },
    price: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingRight:20,
      paddingLeft:20,
      color:"#fff"
    },
    duration:{
      fontSize: 15,
      fontWeight: 'bold',
      paddingLeft:20,
      paddingRight:20,
      color:"#fff"
    },
  });