//SCREEN 1
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import TouchableCmp from '../componentes/UI/TouchableCmp.js';

const ScreenLogin = ({ navigation }) => {
  function goToNumber() {
    navigation.navigate("ScreenTelefonoValido");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../Images/logoRappi.png")} />
      <View style={styles.botones}>
        <TouchableCmp>
          <View style={styles.buttonGoogle}>
            <View style={styles.iconos}>
              <AntDesign name="google" size={24} color="white" />
            </View>
            <View style={styles.viewTexto}>
              <Text style={styles.buttonText}>Continúa con Google</Text>
            </View>
          </View>
        </TouchableCmp>
        <TouchableCmp onPress={goToNumber}>
          <View style={styles.buttonCel}>
          <View style={styles.iconos}>
          <Foundation name="telephone" size={30} color="white"/>
            </View>
            <View style={styles.viewTexto}>
              <Text style={styles.buttonText}>Continúa con tu celular</Text>
            </View>
          </View>
        </TouchableCmp>
        <TouchableCmp>
          <View style={styles.buttonFacebook}>
          <View style={styles.iconos}>
          <FontAwesome5 name="facebook" size={24} color="white"/>
            </View>
            <View style={styles.viewTexto}>
              <Text style={styles.buttonText}>Continúa con Facebook</Text>
            </View>
          </View>
        </TouchableCmp>
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
  iconos:{
    marginTop: '4.2%',
    marginLeft: '4.2%'
  },
  viewTexto:{
    width: '62.5%',
    marginLeft: '12.5%'
  },
  buttonGoogle: {
    backgroundColor: "#4483F4",
    borderRadius: 35,
    width: "88%",
    height: 55,
    marginLeft: "6%",
    marginBottom: '2.5%',
    marginTop: '2.5%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  buttonCel: {
    backgroundColor: "#2BD781",
    borderRadius: 20,
    width: "88%",
    height: 55,
    marginLeft: "6%",
    marginBottom: '2.5%',
    marginTop: '2.5%',
    display: 'flex',
    flexDirection: 'row'
  },
  buttonFacebook: {
    backgroundColor: "#1676F1",
    borderRadius: 35,
    width: "88%",
    height: 55,
    marginLeft: "6%",
    marginBottom: '2.5%',
    marginTop: '2.5%',
    display: 'flex',
    flexDirection: 'row'
  },
  buttonText: {
    color: "white",
    textAlign: "left",
    fontWeight: "bold",
    alignSelf: "auto",
    fontSize: 16,
    marginTop: '5.5%',
    fontFamily: "Nunito-ExtraBold",
  },
  botones: {
    marginTop: 67,
  },
});
