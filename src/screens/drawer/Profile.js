import { View, Text, StyleSheet,Image,ScrollView,Button,Pressable } from 'react-native'
import React,{useEffect,useState} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch,useSelector } from 'react-redux';
import userActions from "../../redux/actions/userActions";

export default function Profile({navigation}) {

    let { logged, role ,id,token,profile,photo,name } = useSelector(store => store.usuario)
    let {exit,getOneUser}=userActions
    let dispatch = useDispatch()

    function redirect(){
      navigation.navigate("Home")
    }
    
    function redirect2(){
      navigation.navigate("MyReactions")
    }

    async function getUsers(){
  
        await dispatch(getOneUser(id))
    }

    useEffect( ()=>{

      getUsers()
    },[])

    let logOut= async ()=>{

      let res= await dispatch(exit(token))

      if (res.payload.success) {

          alert("your session has been closed successfully");
          redirect() 
      
        } else {
          alert("an error has occurred, try Again");
      }
    }

    
    console.log(photo);
    
  return (
    <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{ uri : photo }}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Button onPress={logOut} title='Log out' style={{ margin: 20, backgroundColor: 'firebrick'}} />
              <Pressable style={styles.buttonCustom} onPress={redirect2}>
                  <Text style={styles.textButton}>My Reactions</Text>
              </Pressable>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  
  buttonCustom:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00bfff',
    marginBottom: 10,
    marginTop:15
  },
  textButton:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
    header:{
      backgroundColor: "#00bfff",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#000",
      marginTop:10,
      marginBottom:25,
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });