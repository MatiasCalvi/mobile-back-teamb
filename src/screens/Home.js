import { View, Text, StyleSheet,Dimensions } from "react-native";
import React from "react";
const {height,width}=Dimensions.get('window')


export default function Home() {
  return (
    <View style={styles.header}>
      <View>
        <Text>My itinerary</Text>
        <Text>Adventure Awaits, Go Find It.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: height/2,
    backgroundColor: 'blue',
  }
});
