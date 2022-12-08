import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  Checkbox
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Cards from "../../components/Cards"
/* import { Checkbox } from "react-native-paper"; */
import { useDispatch,useSelector } from 'react-redux';
import toDoActions from '../../redux/actions/toDoActions.js';

const { height, width } = Dimensions.get("window");
const image = {
  uri: "https://images.pexels.com/photos/9329805/pexels-photo-9329805.jpeg?cs=srgb&dl=pexels-bakr-magrabi-9329805.jpg&fm=jpg",
};

export default function Cities({navigation}) {

  let [search,setSearched]=useState()
  let [aproved,setAproved]=useState(true)
  
  
  const dispatch= useDispatch()
  let {getCitiesFilter,getCities}=toDoActions


  const {cities} = useSelector((state) => state.cities);

let listen=(value)=> {
  setSearched(value)
}

async function get(){
  /* console.log(search)
  await dispatch(getCitiesFilter(search)) */
  try {
    if( typeof getCities== 'function' && aproved){

      await dispatch(getCities())
      setAproved(false)
  
    }
    else{
      await dispatch(getCitiesFilter(search))
    }
  }  catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  get()
},[search])

  return (<>
  <ScrollView style={styles.body}>
      <View style={styles.header}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Cities</Text>
          <Text style={styles.text.text2}>Adventure Awaits, Go Find It.</Text>
        </ImageBackground>
      </View>
        <View>
          <SearchBar
            /* updateSearch={updateSearch} */
            onChangeText={listen}
          />
        </View>
      <View style={styles.containerCards}>
        {cities!==undefined 
            ? cities.map(e=><Cards key={e._id} id={e._id} navigation={navigation} name={e.name} photo={e.photo}/>)
            : <Text style={styles.titleResults}>No hay resultados</Text>}
      </View>
  </ScrollView>
  </>);
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:"#fff"
  },
  header: {
    height: height / 2.8,
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
  titleCheckbox:{
    textAlign:'center',
    fontWeight: "bold",
  },
  checkboxContainer:{
    height: height/10,
    backgroundColor:'#fff',
    flexDirection:'column',
    paddingTop:10,
  },
  containerCards:{
    backgroundColor:'#fff', 
    paddingBottom:10,
    paddingTop:20,
  },
  containerCheck:{
    flexDirection:'row',
    alignItems:'center',
    /* justifyContent:'center' */
    paddingLeft:15,
    marginTop:10
  },
  titleResults:{
    textAlign:'center',
    fontWeight: "bold",
  }
});
