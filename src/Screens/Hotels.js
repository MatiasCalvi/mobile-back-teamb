import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import SearchBar from "../components/SearchBar"
  import Cards from "../components/Cards"

  
  const { height, width } = Dimensions.get("window");
  const image = {
    uri: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  
  function updateSearch(value){
  
  }
  
  export default function Hotels() {
    let [value,setValue]=useState() 
    const [checked, setChecked] = useState(false); 
    return (<>
    <ScrollView>
        <View style={styles.header}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Hotels</Text>
            <Text style={styles.text.text2}>Adventures at your reach</Text>
          </ImageBackground>
        </View>
          <View>
            <SearchBar
              value={value}
              updateSearch={updateSearch}
              style={{}}
            />
          </View>
        <View style={styles.containerCards}>
             <Cards/> 
        </View>
    </ScrollView>
    </>);
  }
  
  const styles = StyleSheet.create({
    header: {
      height: height / 2,
    },
    image: {
      flex: 1,
      justifyContent: "center",
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
    containerCards:{
      backgroundColor:'#fff', 
      height: height/2,
      paddingBottom:10,
      paddingTop:20,
    },

  });