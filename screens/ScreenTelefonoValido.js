//SCREEN 2
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert, Button, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import * as authActions from "../validators/actions/authActions";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ScreenTelefonoValido = ({ navigation }) => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const [numListo, setNumListo] = useState(false)

  const onClick = () => {
    try {
      number
        ? celValidado()
        : Alert.alert("Alert", "Campos Vacios!", [{ text: "Ok" }]);
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };

  function goToCode(){
    navigation.navigate("ScreenCodigoAuth");
  };

  function regresar(){
    navigation.navigate("ScreenLogin");
  };

  const celValidado = () =>{
    dispatch(authActions.tryCel(number));
    goToCode();
  }

  const validateNumber = (number) => {
    setNumber(number);
    complete();
  };

  const complete = () =>{
    var largo = number.toString().length
    if (largo == 9){
      setNumListo(true)
    }else{
      setNumListo(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        <AntDesign name="arrowleft" size={24} color="black" onPress={regresar}/>
      </View>
      <View style={styles.textCont}>
        <Text style={styles.texto}>Agrega tu número celular,</Text>
        <Text style={styles.texto}>así podremos reconocerte</Text>
      </View>
     <View style={styles.numero}>
      <TextInput
          style={styles.input}
          placeholder="Número celular"
          onChangeText={(text) => validateNumber(text)}
          keyboardType = 'numeric'
        />
        <Image 
          source={require('../Images/mexican_flag.png')}
          style={styles.lada}
        />
        <Text style={styles.ladaT}>+52</Text>
      </View>
      <View style={styles.boton}>
        <TouchableOpacity onPress={onClick} style={numListo?styles.buttonC:styles.button}>
          <Text style={styles.buttonText}>Recibir código por SMS</Text>
        </TouchableOpacity>
      </View>  
      <View style={styles.icono1}>
        <Ionicons name="chatbubble-ellipses-outline" size={25} color={"white"} />
      </View> 
      <View style={styles.boton2}>
        <TouchableOpacity style={numListo?styles.button2C:styles.button2}>
          <Text style={numListo?styles.buttonText2C:styles.buttonText2}>Recibir código WhatsApp</Text>
        </TouchableOpacity>
      </View>  
      <View style={styles.icono2}>
        <FontAwesome name="whatsapp" size={25} color={numListo ? "#2BD781" : "grey"} />
      </View>   
    </View>
  );
};

export default ScreenTelefonoValido;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    width: "70%",
    height: 36,
    borderRadius: 5,
    fontSize: 23,
    paddingLeft: 10,
    marginBottom: 30,
    marginLeft:70,
    fontSize:24,
    fontFamily:'Nunito-ExtraBold'
  },
  arrow:{
    justifyContent:'flex-start',
    marginTop:70,
    marginLeft:20,
  },
  textCont:{
    justifyContent:'flex-start',
    marginLeft:20,
    marginTop:23
  },
  texto:{
    fontSize:25,
    fontFamily:'Nunito-ExtraBold',
  },
  numero:{
    marginLeft:'8%',
    marginTop:39,
  },
  button:{
    backgroundColor: "grey",
    borderRadius: 35,
    width:'88%',
    height:55,
    marginLeft:'6%',
    borderColor:'grey',
    borderWidth:0.18,
  },
  buttonC:{
    backgroundColor: "#2BD781",
    borderRadius: 35,
    width:'88%',
    height:55,
    marginLeft:'6%'
  },
  buttonText:{
    color: "white",
    textAlign:'center',
    fontWeight:'bold',
    alignSelf:'auto',
    marginTop:18,
    fontSize:16,
    fontFamily:'Nunito-ExtraBold'
  },
  boton:{
    justifyContent:'center',
    marginTop:67
  },
  icono1:{
    position:'absolute',
    marginTop:373,
    marginLeft:42
  },
  boton2:{
    justifyContent:'center',
    marginTop:18
  },
  icono2:{
    position:'absolute',
    marginTop:446,
    marginLeft:42
  },
  button2:{
    borderRadius: 35,
    width:'88%',
    height:55,
    marginLeft:'6%',
    borderColor:'grey',
    borderWidth: 0.18,
    backgroundColor:'white'
  },
  button2C:{
    borderRadius: 35,
    width:'88%',
    height:55,
    marginLeft:'6%',
    borderColor:'grey',
    borderWidth: 0.18,
    backgroundColor:'white'
  },
  buttonText2C:{
    color: "#2BD781",
    textAlign:'center',
    fontWeight:'bold',
    alignSelf:'auto',
    marginTop:18,
    fontSize:16,
    fontFamily:'Nunito-ExtraBold'
  },
  buttonText2:{
    color: "grey",
    textAlign:'center',
    fontWeight:'bold',
    alignSelf:'auto',
    marginTop:18,
    fontSize:16,
    fontFamily:'Nunito-ExtraBold'
  },
  lada:{
    position:'absolute',
    width:24,
    height:25,
    marginTop:4.5
  },
  ladaT:{
    position:'absolute',
    marginTop:4,
    marginLeft:29,
    fontSize:19,
    fontFamily:'Nunito-ExtraBold'
  }
});
