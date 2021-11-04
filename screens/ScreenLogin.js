//SCREEN 1
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ScreenLogin = ({ navigation }) => {
  function goToNumber() {
    navigation.navigate("ScreenTelefonoValido");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../Images/logoRappi.png")} />
      <View style={styles.boton}>
        <TouchableOpacity style={styles.buttonGoogle}>
          <Text style={styles.buttonText}>Continuar con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNumber} style={styles.buttonCel}>
          <Text style={styles.buttonText}>Continua con tu celular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFacebook}>
          <Text style={styles.buttonText}>Continua con Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconMail}>
        <AntDesign name="google" size={24} color="white" />
      </View>
      <View style={styles.iconCel}>
        <Foundation name="telephone" size={24} color="white" />
      </View>
      <View style={styles.iconFacebook}>
        <FontAwesome5 name="facebook" size={24} color="white" />
      </View>
    </View>
  );
};
export default ScreenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "80%",
    height: 300,
    marginTop: "30%",
    marginLeft: "10%",
    resizeMode: "contain",
  },
  iconMail: {
    position: "absolute",
    marginTop: '136%',
    marginLeft: 42,
  },
  buttonGoogle: {
    backgroundColor: "#4483F4",
    borderRadius: 35,
    width: "88%",
    height: 55,
    marginLeft: "6%",
    marginBottom: '5.5%',
  },
  iconCel: {
    position: "absolute",
    marginTop: '157%',
    marginLeft: 42,
  },
  buttonCel: {
    backgroundColor: "#2BD781",
    borderRadius: 35,
    width: "88%",
    height: 55,
    marginLeft: "6%",
    marginBottom: '5.5%',
  },
  iconFacebook: {
    position: "absolute",
    marginTop: '177%',
    marginLeft: 42,
  },
  buttonFacebook: {
    backgroundColor: "#1676F1",
    borderRadius: 35,
    width: "88%",
    height: 55,
    marginLeft: "6%",
    marginBottom: '5.5%',
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "auto",
    marginTop: 18,
    fontSize: 16,
    fontFamily: "Nunito-ExtraBold",
  },
  boton: {
    justifyContent: "center",
    marginTop: 67,
  },
});
