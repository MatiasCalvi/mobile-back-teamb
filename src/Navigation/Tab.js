import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import EditProfile from '../Screens/EditProfile';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import Hotels from '../Screens/Hotels';


const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="blue"
      barStyle={{ backgroundColor: 'lightblue' }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarLabel: 'SignIn',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-child-circle" color={color} size={26} />
          ),
        }}
      />       
      <Tab.Screen
        name="Hotels"
        component={Hotels}
        options={{
          tabBarLabel: 'Hotels',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-child-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          tabBarLabel: 'Edit Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="card-account-details" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}