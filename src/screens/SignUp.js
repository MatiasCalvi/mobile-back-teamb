import React,{useState} from "react";
import * as ImagePicker from 'expo-image-picker'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet
} from "react-native";
import Button from "../components/componentsSignUp/Button";
import Input from "../components/componentsSignUp/Input";
import Loader from "../components/componentsSignUp/Loader";
import COLORS from "../components/colors/colors";
import usersActions from "../redux/actions/usersActions";
import { useDispatch } from "react-redux";

export default function SignUp({ navigation }) {
  let { userCreation } = usersActions;
  let dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const [photo, setImage] = useState(null);

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  };
    
    const [inputs, setInputs] = React.useState({
      email: "",
      name: "",
      lastName: "",
      password: "",
    });


  async function register() {

    inputs.role = "user";
    inputs.age = 36;
    inputs.photo=photo

    try {
      const res = await dispatch(userCreation(inputs));
      if (res.payload.success) {
        alert("registration completed satisfactory");
      } else {
        alert(res.payload.response);
      }
    } catch (error) {
      console.log(error);
    }

     console.log(inputs);
  }

  
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 20 }}
      >
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          Register
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Register
        </Text>
        <View style={{ marginVertical: 10 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "name")}
            iconName="account-outline"
            label="Name"
            placeholder="Enter your name"
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "lastName")}
            iconName="account-outline"
            label="Lastname"
            placeholder="Enter your lastname"
          />

          <Pressable style={styles.buttonCustom} onPress={pickImage}>
              <Text style={styles.textButton}>Search an Image</Text>
          </Pressable>
          
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            password
          />
          <Button title="Register" onPress={register} />
          <Text
            onPress={() => navigation.navigate("Cities")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            Already have account ? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  buttonCustom:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00bfff',
    marginBottom: 10,
  },
textButton:{
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
},
})