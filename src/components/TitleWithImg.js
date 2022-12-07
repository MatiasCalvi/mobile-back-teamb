import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";

export default function TitleWithImg(props) {
  let {name,photo}=props
  return (<>

    <View className='c-titleImgColumn'>
      <Text>{name}</Text>
      <Image className='c-imgCarousel' src={photo} alt={name} />
    </View>
    </>

  )
}
