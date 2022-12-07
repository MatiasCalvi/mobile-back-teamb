import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Slider from '../components/carrousel/Slider'


export default function Home() {
    
    const Tab = createBottomTabNavigator();

    return ( 

<View className="total">

            <View className="bg-img total">
                <View className="total flex j-center a-center flex-column ">
                    <View className="flex flex-column a-center">
                        <Image src="./img/sun.png"  />
                        <Text className=" f-s-big t-a-center shadow">
                        Adventure Awaits, Go Find It.
                        </Text>
                    </View>
                    <View className="w-100 flex g-25 a-center flex-column ">
                    <Button className="butt-class" title='Find your next destiny.'/>
                    <Button className="butt-class" title='Find the best hotels.' />
                    </View>
                </View>
            </View>
            <View className='home2'>
            <Slider/>
            </View>


</View>
        
        
        
    
    )
    
}

const style = StyleSheet.create({

})