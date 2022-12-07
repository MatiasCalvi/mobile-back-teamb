import { View, Text, StyleSheet, TextInput, Pressable , ImageBackground } from "react-native";
import React from 'react'

export default function SignIn() {
    const handleSubmit = () => {
        console.log ('Logeado')
    }
    const image = {
        uri: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      };

    return ( 

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  width: '100%' }}>
                <View  >
                    <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                    
                        <View style={{ backgroundColor: 'grey', opacity: 0.8, left:16, height:'60%', top:190, borderRadius: 25  }}>

                            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center',    }}>
                                <Text style={ styles.head.text2}> Sign in</Text>
                                <TextInput style={ styles.search} placeholder='Email'/>
                                <TextInput style={ styles.search} placeholder='Password'/>
                            </View>

                            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }}>
                            <Pressable style={styles.buttono} onPress={handleSubmit}>
                                <Text style={ styles.texto}>Enter</Text>
                            </Pressable>
                            <Text style={ styles.text}>or if you have an account</Text>
                            <Pressable style={styles.buttono} onPress={handleSubmit}>
                                <Text style={ styles.texto}>Sign Up</Text>
                            </Pressable>
                            </View>
                    
                        </View>
                    
                    </ImageBackground>
                </View>
        </View>
    

    
    )
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        right: 16,
    },
    search: {
        marginTop: 20,
        textAlign: 'center',
        backgroundColor: 'lightblue' ,
        width: '80%',
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 25,
     
      },
    button: {
      fontSize: 28,
      marginVertical: 12,
      color: '#333',
      paddingVertical: 15,
    },
    text: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      width: '80%'
      
    },
    head: {
        text2: {

            width: '100%',
            fontSize: 32,
            fontWeight: 'bold',
          color: "white",
          lineHeight: 60,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#000000c0",
          textTransform: "uppercase",  
          
        },
      },

      buttono: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 5,
        width: '80%',
      },
      texto: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });