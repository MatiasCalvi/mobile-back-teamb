import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from './src/navegation/Drawer';


export default function App() {
  return (
    <NavigationContainer>
      <Drawer/>
    </NavigationContainer>
  );
}
