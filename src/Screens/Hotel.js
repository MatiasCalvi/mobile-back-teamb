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
  import CardHotel from "../components/CardHotel"
  import hotelActions from '../redux/actions/hotelActions'
  import { useDispatch,useSelector } from 'react-redux';
  import { useNavigation } from '@react-navigation/native';

  
  const { height, width } = Dimensions.get("window");
  const image = {
    uri: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  
  
  export default function Hotels(navigation) {

    let [search,setSearch]=useState()
  let [aproved,setAproved]=useState(true)
  
  
  const dispatch= useDispatch()
  let {getHotelsFilter,getHotels}=hotelActions


  const {hotels} = useSelector((state) => state.hotels);
  console.log(hotels)

let listen= (value)=> {
  setSearch(value)
}
console.log(search)
async function get(){

  try {
    if( typeof getHotels== 'function' && aproved){

      await dispatch(getHotels())
      setAproved(false)
  
    }
    else{
      await dispatch(getHotelsFilter(search))
    }
  }  catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  get()
},[search])


    return (<>
    <View>
        <View style={styles.header}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Hotels</Text>
            <Text style={styles.text.text2}>Adventures at your reach</Text>
          </ImageBackground>
        </View>
          <View>
          <SearchBar
            onChangeText={listen}
          />
          </View>
        <ScrollView style={styles.containerCards}>
        {hotels!==undefined 
            ? hotels.map(hotel=><CardHotel key={hotel._id} id={hotel._id} navigation={navigation} name={hotel.name} photo={hotel.photo[0]}/>)
            : <Text style={styles.titleResults}>No hay resultados</Text>}
        </ScrollView>
    </View>
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