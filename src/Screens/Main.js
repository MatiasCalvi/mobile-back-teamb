import { View,ScrollView, Text, StyleSheet, TextInput, Button, Image, ImageBackground } from "react-native";
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Slider from '../components/carrousel/Slider'


export default function Home({navigation}) {



    const Tab = createBottomTabNavigator();
    const onPressLearnMore = console.log('todo ok')
    const image = {
        uri: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      };
    
      let RSign =() => {
        navigation.navigate("SignIn")
    }
      let Redit =() => {
        navigation.navigate("EditProfile")
    }

    return ( 

        <View style={{ flex:1 , backgroundColor: 'lightgrey'}}>
            <View style={{ flex:1, backgroundColor: 'lightgrey' }}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                        <Text style={styles.text.text2} >
                        Adventure Awaits, Go Find It.
                        </Text>
                <View >
                    <View style={styles.fixToText}>
                    <Button title='Find your next destiny' onPress={(RSign)}  />
                    <Button  title='Find the best hotels' onPress={(Redit)} />
                    </View>
                </View>
                </ImageBackground>
            </View>
            <View style={{ flex:2, backgroundColor: 'lightgrey', marginTop:10, }}>
                <Slider/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
    Text: {
        justifyContent: "center",
        alignItems: 'center',
        
      },
      fixToText: {
        marginTop: 22,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
    text: {
        text2: {
            marginTop: -44,
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
  });