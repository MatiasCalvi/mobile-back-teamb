
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Tabs from './src/Navigation/Tab'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tabs />
      </NavigationContainer>
    </Provider>
  );
}