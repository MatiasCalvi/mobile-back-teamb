import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Cards from "../../components/Cards"
import { Checkbox } from "react-native-paper";

const { height, width } = Dimensions.get("window");
const image = {
  uri: "https://images.pexels.com/photos/9329805/pexels-photo-9329805.jpeg?cs=srgb&dl=pexels-bakr-magrabi-9329805.jpg&fm=jpg",
};

function updateSearch(value){

}

export default function Cities() {
  let [value,setValue]=useState() 
  const [checked, setChecked] = useState(false); 
  return (<>
  <ScrollView>
      <View style={styles.header}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Cities</Text>
          <Text style={styles.text.text2}>Adventure Awaits, Go Find It.</Text>
        </ImageBackground>
      </View>
        <View>
          <SearchBar
            value={value}
            updateSearch={updateSearch}
            style={{}}
          />
        </View>
      <View style={styles.checkboxContainer}>
          <Text style={styles.titleCheckbox}>Select the desired continent :</Text>
          <View style={styles.containerCheck}>
              <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text>Continent</Text>
          </View>
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
    height: height/2,
    paddingBottom:10,
    paddingTop:20,
  },
  containerCheck:{
    flexDirection:'row',
    alignItems:'center',
    /* justifyContent:'center' */
    paddingLeft:15,
    marginTop:10
  }
});
