import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";

export default function Arrow(props) {
  let {icono,evento}=props
  return (
    <View className="arrows" onClick={evento}>{icono}</View>
  )
}
