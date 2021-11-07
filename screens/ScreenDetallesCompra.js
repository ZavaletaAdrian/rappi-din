//SCREEN 8

import React from 'react';
import {View, StyleSheet, Text, Dimensions} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import TouchableCmp from '../componentes/UI/TouchableCmp';


const ScreenDetallesCompra = () =>{
    return(
        <View style={styles.container}>
          <View style={styles.part1}>
            <View style={styles.style1}>
              <AntDesign name="arrowleft" size={24} color="black" />
              <Text style={styles.txt1}>Tu pedido</Text>
            </View>
            <View style={styles.style2}>
              <Text style={styles.txt2}>Dividir cuenta</Text>
              <Text style={styles.txt3}>Seleccionar contactos</Text>
            </View>
            <View style={styles.style3}>
              <Text style={styles.txtP1}>Propina</Text>
              <Text style={styles.txtP4}>¡Las entregas solo son posibles gracias a ellos!</Text>
              <Text style={styles.txtP5}>Añade un propina y reconoce su esfuerzo</Text>
              <View style={styles.style7}>
                <View style={styles.cuadrito}>
                  <Text style={styles.txtCuadrito}>$0</Text>
                </View>
                <View style={styles.cuadrito}>
                  <Text style={styles.txtCuadrito}>$20</Text>
                </View>
                <View style={styles.cuadrito}>
                  <Text style={styles.txtCuadrito}>$30</Text>
                </View>
                <View style={styles.cuadrito}>
                  <Text style={styles.txtCuadrito}>$40</Text>
                </View>
                <View style={styles.cuadrito}>
                  <Text style={styles.txtCuadrito}>Otro</Text>
                </View>
              </View>
              <Text style={styles.txtP6}>Tu Rappi recibe el 100% de este valor</Text>
            </View>
          </View>
          <View style={styles.part2}>
            <View style={styles.style4}>
              <Text>Resumen</Text>
            </View>
            <TouchableCmp>
              <View style={styles.style5}>
                <View style={styles.style6}>
                  <Text style={styles.txtB1}>Hacer pedido</Text>
                  <Text style={styles.txtB2}>TOTAL</Text>
                </View>
              </View>
            </TouchableCmp>
          </View> 
        </View>
    )
}

export default ScreenDetallesCompra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  part1:{
    backgroundColor:'white',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * .415,
  },
  part2:{
    backgroundColor:'green',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * .601,
    marginTop:Dimensions.get('window').height*.015
  },
  style1:{
    backgroundColor:'white',
    width: Dimensions.get('window').width * .549,
    height:Dimensions.get('window').height * .100,
    flexDirection:'row',
    marginLeft:'5%',
    justifyContent:'space-between',
    alignItems:'flex-end',
  },
  style2:{
    backgroundColor:'white',
    width: Dimensions.get('window').width * .900,
    height:Dimensions.get('window').height * .060,
    borderRadius: 15,
    marginLeft:'5%',
    marginTop:'9%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  style3:{
    backgroundColor:'red',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * .170,
    marginTop:'7%'
  },
  style4:{
    backgroundColor:'purple',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * .450
  },
  style5:{
    backgroundColor:'#2BD781',
    width: Dimensions.get('window').width * .900,
    height:Dimensions.get('window').height * .080,
    marginLeft:'5%',
    marginTop:'7%',
    borderRadius:15,
  },
  style6:{
    width: '60%',
    height:Dimensions.get('window').height * .080,
    marginLeft:'35%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  style7:{
    width: '90%',
    height: '30%',
    marginLeft:'5%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:5,
    marginBottom:5
  },
  txt1:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
  },
  txtP1:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
    marginLeft:'5%'
  },
  txt2:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:14,
  },
  txt3:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
    color: '#2BD781'
  },
  txtP4:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:14,
    color: 'black',
    marginLeft:'5%'
  },
  txtP5:{
    fontFamily:'Nunito-Light',
    fontSize:13,
    color: 'black',
    marginLeft:'5%'
  },
  txtP6:{
    fontFamily:'Nunito-Light',
    fontSize:12,
    color: 'grey',
    marginLeft:'5%',
  },
  txtB1:{
    fontFamily:'Nunito-SemiBold',
    fontSize:16,
    color:'white',
  },
  txtB2:{
    fontFamily:'Nunito-ExtraBold',
    fontSize:16,
    color:'white',
  },
  cuadrito:{
    borderRadius:20,
    borderWidth:.5,
    borderColor:'grey',
    height:'80%',
    width:'18%',
    alignItems:'center',
    justifyContent:'center'
  },
  txtCuadrito:{
    color: 'grey',
    fontFamily:'Nunito-ExtraBold',
    fontSize:14
  },
});