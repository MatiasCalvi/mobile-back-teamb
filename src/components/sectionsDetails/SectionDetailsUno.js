import { View, Text, Image, ImageBackground,StyleSheet,Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

export default function SectionDetailsUno({photo,name,population,continent}) {

  const image = {
    uri: photo,
  };
  
  return (
       
            <View style={styles.content}>
                <Image style={styles.image} source={image}/>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.titleContinent}>Continent : <Text style={styles.span}>{continent}</Text></Text>
                <Text style={styles.description}>Population : <Text style={styles.span}>{population}</Text> people</Text>
            </View>
       
  );
}

const styles = StyleSheet.create({
    
    span:{
      fontWeight:'bold',
    },
    image: {
      height:300,
      width:'100%',
    },
    titleContinent:{
      fontSize: 18,
      marginVertical: 12,
      color: '#333',
    },
    content: {
      flex: 0.2,
      alignItems: 'center',
    },
    title: {
      marginTop: 12,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      textTransform: "uppercase",
    },
    description: {
      fontSize: 18,
      marginVertical: 12,
      color: '#333',
    },
    price: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 60,
    },
  });