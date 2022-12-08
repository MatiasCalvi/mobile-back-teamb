import { View, Text,StyleSheet,Dimensions,ImageBackground } from 'react-native'
import React, { useEffect, useState } from "react";
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios';
import {BASE_URL} from '../api/url'
import { useDispatch,useSelector } from 'react-redux';
import reactionsActions from '../redux/actions/reactionsActions';
import SectionDetailsUno from '../components/sectionsDetails/SectionDetailsUno'
import SectionDetailsDos from '../components/sectionsDetails/SectionDetailsDos'
import SectionDetailsTres from '../components/sectionsDetails/SectionDetailsTres'

const { height, width } = Dimensions.get("window");

const image = {
  uri: "https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default function City({route}) {

  const {cityId}=route.params

  let [filter,setFilter]=useState([])
  let [shows,setShows]=useState([])

  let user=[]

  useEffect(()=>{
    axios.get(`${BASE_URL}/cities`)
    .then(response=>setFilter(response.data.allcities.find((x) => x._id === cityId)))
  },[])

  let {name,continent,photo,population,userId}=filter

  useEffect (()=>{
    axios.get(`${BASE_URL}/itineraries`)
    .then(response=>setShows(response.data.itinerary))
  },[])

  let show=shows.filter(e=>e.cityId==cityId)
  user.push(userId)

  /* ----------------------------------------------------------------------------------------------------------------- */

  let dispatch=useDispatch()

    let {getReactionItinerary,getReactionItinerary2}=reactionsActions

    const {reactionsItinerary,reactionsItineray2} = useSelector((state) => state.newReaction);
    console.log(reactionsItinerary)
    
    let{token,logged}=useSelector(state=>state.usuario)
    

    let idItinerary=show[0]?._id;
    let idItinerary2=show[1]?._id;

    console.log(idItinerary)
    async function get(){
        await dispatch(getReactionItinerary({idItinerary,token}))
    }
    async function get2(){
        await dispatch(getReactionItinerary2({idItinerary2,token}))
    }

    useEffect(()=>{
        get()
    },[idItinerary])

    useEffect(()=>{
        get2()
    },[idItinerary2])

  return (<>
    <ScrollView style={styles.body}>
      <View style={styles.header}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Cities</Text>
          <Text style={styles.text.text2}>Adventure Awaits, Go Find It.</Text>
        </ImageBackground>
      </View>
      <Text style={styles.titleCity}>City</Text>
      <SectionDetailsUno name={name} continent={continent} photo={photo} population={population}/>
      {(show.length!=0)
          ?<Text style={styles.titleItineraries}>Itineraries</Text>
          :<></>}
      <View style={styles.containerItineraries}>
      {(show.length!=0)
          ?<SectionDetailsDos itinerary={show[0]}/>
          :<></>}
      {(show.length!=0)
          ?<SectionDetailsTres itinerary={show[1]} />
          :<></>}
      </View>
    </ScrollView>
  </>)
}
const styles=StyleSheet.create({
  header: {
    height: height / 2.8,
  },
  containerItineraries:{
    paddingBottom:40  
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  titleCity:{
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    backgroundColor:"#000",
    paddingBottom:10,
    paddingTop:10,
    fontSize:18
  },
  titleItineraries:{
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    backgroundColor:"#000",
    paddingBottom:10,
    paddingTop:10,
    fontSize:15
  },
  text: {
    fontSize: 14,
      color: "white",
      lineHeight: 60,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      textTransform: "uppercase",
    text2: {
      fontSize: 14,
      color: "white",
      lineHeight: 60,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      textTransform: "uppercase",
  },
  body:{
    backgroundColor:"#fff"
  },
}})