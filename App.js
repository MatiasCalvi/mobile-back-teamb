import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navegation/Drawer';


import { Provider } from "react-redux";
import { store } from "./src/redux/store";



export default function App() {
  
  
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Drawer/>
      </NavigationContainer>
    </Provider>
  );
}
