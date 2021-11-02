//SCREEN 3

import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, TextInput, Alert, Button } from "react-native";
import { useDispatch } from "react-redux";
import * as authActions from "../validators/actions/authActions";
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';



const ScreenCodigoAuth = ({ navigation }) =>{
  const celular = useSelector(state=>state.auth.number);

  const [code, setCode] = useState({1: '', 2: '', 3: '', 4: ''});
  const dispatch = useDispatch();

  const primer = useRef();
  const segundo = useRef();
  const tercer = useRef();
  const cuarto = useRef();

  const prueba = () =>{
    var number = code[1]+code[2]+code[3]+code[4];
    console.log(code)
    console.log(number)
  }

  const onClick = () => {
    var codeAuth = code[1]+code[2]+code[3]+code[4];
    try {
      codeAuth
        ? dispatch(authActions.tryCode(codeAuth))
        : Alert.alert("Alert", "Campos Vacios!", [{ text: "Ok" }]);
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };


  function regresar(){
    navigation.navigate("ScreenTelefonoValido");
  };

    return(
      <View style={styles.container}>
        <View style={styles.arrow}>
          <AntDesign name="arrowleft" size={24} color="black" onPress={regresar}/>
        </View>
        <View style={styles.textCont}>
          <Text style={styles.texto}>¿Eres tú? Ingresa el código</Text>
          <Text style={styles.texto}>que te enviamos.</Text>
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.textoV}>VÍA </Text>
          <Text style={styles.textoT}>+52 {celular}</Text>
        </View>
        <View style={styles.codigo}>
          <View style={styles.digito}>
            <TextInput
              style={styles.input}
              keyboardType = 'numeric'
              maxLength={1}
              onChangeText={(text) => {
                setCode({...code, 1: text})
                text && segundo.current.focus()
              }}
              ref = {primer}
            />
          </View>
          <View style={styles.digito}>
            <TextInput
                style={styles.input}
                keyboardType = 'numeric'
                maxLength={1}
                onChangeText={(text) => {
                  setCode({...code, 2: text})
                  text ? tercer.current.focus() : primer.current.focus()
                }}
                ref = {segundo}
              />
          </View>
          <View style={styles.digito}>
            <TextInput
                style={styles.input}
                keyboardType = 'numeric'
                maxLength={1}
                onChangeText={(text) => {
                  setCode({...code, 3: text})
                  text ? cuarto.current.focus() : segundo.current.focus()
                }}
                ref = {tercer}
              />
          </View>
          <View style={styles.digito}>
            <TextInput
                style={styles.input}
                keyboardType = 'numeric'
                maxLength={1}
                onChangeText={(text) => {
                  setCode({...code, 4: text})
                  !text == ''  ? cuarto.current.focus() : onClick()
                }}
                ref = {cuarto}
              />
          </View>
        </View>
        <View style={styles.leyenda}>
          <Text style={styles.texto2}>Podrás solicitar un código nuevo en</Text>
          <Text style={styles.textoT}>1 minuto</Text>
        </View>
      </View>
    )
}

export default ScreenCodigoAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    fontSize:17,
    fontFamily:'Nunito-Bold',
    textAlign:'center',
    paddingHorizontal:10,
    paddingVertical:6,
  },
  arrow:{
    justifyContent:'flex-start',
    marginTop:70,
    marginLeft:20,
  },
  texto:{
    fontSize:24,
    fontFamily:'Nunito-ExtraBold',
  },
  textCont:{
    justifyContent:'flex-start',
    marginLeft:20,
    marginTop:23,
  },
  contenedor:{
    justifyContent:'flex-start',
    marginLeft:20,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-around',
    width:'38%'
  },
  texto2:{
    fontSize:13,
    fontFamily:'Nunito-Light',
    color:'grey'
  },
  leyenda:{
    alignItems:'center',
    marginTop:100,
  },
  codigo:{
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'row',
    width:'65%',
    marginLeft:'17.5%',
    marginTop:80
  },
  digito:{
    borderRadius: 25,
    borderColor:'black',
    borderWidth:0.8,
  },
  textoV:{
    fontSize:12,
    fontFamily:'Nunito-ExtraBold',
    color:'black'
  },
  textoT:{
    fontSize:12,
    fontFamily:'Nunito-ExtraBold',
    color:'blue'
  },
});