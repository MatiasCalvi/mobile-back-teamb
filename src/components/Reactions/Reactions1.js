import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import reactionsActions from '../../redux/actions/reactionsActions'

const image = {
  uri: "https://cdn-icons-png.flaticon.com/512/2589/2589054.png",
};

export default function Reactions1(props) {

  let {array}=props

   let idItinerary=array[0]?.itineraryId
  

   const [reload, setReload] = useState(true)

   let { feedbackReaction, getReactionItinerary } = reactionsActions

   let dispatch = useDispatch()

   let { id , token,logged } = useSelector(store=>store.usuario)


   
   async function updateReaction() {
     
     await dispatch(getReactionItinerary({idItinerary,token}))
  }
    
    useEffect(() => {
     updateReaction()
   }, [reload])

  async function giveReaction(e) {
       
     
  

}
  
  return (<>
    <View style={styles.containerGeneral}>

        {logged ?
             array.map(x=>{ 

              let user = x.userId.find(user => user === id)
              let quantity = x.userId.length
                        
                        return(<>
                                
                                <View style={styles.containerReaction}>
                                <TouchableOpacity onPress={giveReaction}>
                                    <Image style={styles.imageReaction} source={{uri : x.icon}}/>
                                </TouchableOpacity>
                                    <Text style={styles.quantity}>{quantity}</Text> 
                                </View> 
                        
                      </>)}) 
            : <></>}
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
    width:20,
    height:20,  
  }

})