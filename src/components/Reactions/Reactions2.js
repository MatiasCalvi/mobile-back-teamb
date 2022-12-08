import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

const image = {
  uri: "https://cdn-icons-png.flaticon.com/512/2589/2589054.png",
};

export default function Reactions2() {
    return (<>
    <View style={styles.containerGeneral}>
        <View style={styles.containerReaction}>
            <Image style={styles.imageReaction} source={image}/>
            <Text style={styles.quantity}>2</Text> 
        </View>
    </View>
  </>)
}

const styles=StyleSheet.create({
  quantity:{
    fontWeight: "bold",
  },  
  containerGeneral:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  containerReaction:{
    marginTop:20,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  imageReaction:{
    width:15,
    height:15,  
  }

})