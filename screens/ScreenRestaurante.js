//SCREEN 6
import React, { useState } from 'react';
import {View, StyleSheet, FlatList, Dimensions, ScrollView, TextInput, Text, Image, Touchable} from "react-native";
import { Entypo } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

import * as menuVar from '../dummy-data/data';
import TouchableCmp from '../componentes/UI/TouchableCmp';

import { RESTAURANT } from '../dummy-data/data';
import PlatilloCard from '../componentes/PlatilloCard';

const ScreenRestaurante = (props) =>{
  function headers(propsHeaders){
    return(
      <View>
        <Image source={{uri: propsHeaders.background}} style={styles.resImg} opacity={0.5}/>
        <View style={styles.headerOutInfo}>
          <Image source={{uri: propsHeaders.image}} style={styles.resLogoImg}/>
          <View style={styles.headerOutInfoText}>
            <Text style={styles.headerOutInfoText1}>{propsHeaders.name}</Text>
            <Text style={styles.headerOutInfoText2}>Ver mas información {'>'}</Text>
          </View>
        </View>
        <View style={styles.headerIn}>
          <View style={styles.resIconInfo}>
            <FontAwesome5 name="clock" size={24} color="#FC8C03" />
            <Text style={styles.resInfoText}>Entrega en: {propsHeaders.deliveryTime}</Text>
          </View>
          <View style={styles.resIconInfo}>
            <MaterialIcons name="delivery-dining" size={24} color="gray"/>
            <Text style={styles.resInfoText}>Costo de envio: ${propsHeaders.deliveryFee}.00</Text>
          </View>
          <View style={styles.resIconInfo}>
            <AntDesign name="star" size={24} color="#FC8C03" />
            <Text style={styles.resInfoText}>Calificación promedio: {propsHeaders.rating}</Text>
          </View>

          <View style={styles.iconHeart}>
            <AntDesign name="hearto" size={24} color="gray"/>
          </View>
          
          <View style={styles.iconShare}>
            <Ionicons name="arrow-redo-outline" size={24} color="gray" />
          </View>

          <View style={styles.buttonsDeliveryMethod}>
            <TouchableCmp>
              <View style={styles.deliveryOn}>
                <Text style={styles.deliveryTextOn}>Entrega a Domicilio</Text>
              </View>
            </TouchableCmp>
            <TouchableCmp>
              <View style={styles.deliveryOff}>
                <Text style={styles.deliveryTextOff}>Recoger en tienda</Text>
              </View>
            </TouchableCmp>
          </View>

          <View style={styles.buttonAdicional}>
            <MaterialIcons name="attach-money" size={13} color="gray" />
            <Text style={styles.textAdicional1}>5% adicional por servicio. Descuentos para Prime.</Text>
            <Text style={styles.textAdicional2}>Ver detalle</Text>
          </View>
        </View>
      </View>
    )
  }
  const regresar = () =>{
    props.navigation.navigate("Buscar")
  }
  function buscador(){
    return(
      <View style={styles.style1}>
        <View style={styles.arrow}>
          <AntDesign name="arrowleft" size={24} color="black" onPress={regresar}/> 
        </View>
        <TextInput
            style={styles.input}
            placeholder="Buscar en rappi..."
        />
        <View style={styles.botonBuscar1}>
          <TouchableCmp>
            <View style={styles.botonBuscar2}>
              <Entypo name="magnifying-glass" size={24} color={"#FFFFFF"} />
            </View>
          </TouchableCmp>
        </View>
      </View>
    )
  }
  const restaurantInfo = props.route.params.productInfo.id
  if (restaurantInfo==1){
    return(
      <ScrollView style={styles.container} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        {buscador()}
        {headers(props.route.params.productInfo)}

        <FlatList
          data={menuVar.MENU1}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem= {itemData => (
            <PlatilloCard {...props} productInfo={itemData.item}/>
            )}
        />
      </ScrollView>
    )
  }else if(restaurantInfo==2){
    return(
      <ScrollView style={styles.container} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        {buscador()}
        {headers(props.route.params.productInfo)}
        <FlatList
          data={menuVar.MENU2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem= {itemData => (
            <PlatilloCard {...props} productInfo={itemData.item}/>
          )}
        />
      </ScrollView>
    )
  }else if(restaurantInfo==3){
    return(
      <ScrollView style={styles.container} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        {buscador()}
        {headers(props.route.params.productInfo)}
        <FlatList
          data={menuVar.MENU3}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem= {itemData => (
            <PlatilloCard {...props} productInfo={itemData.item}/>
          )}
        />
      </ScrollView>
    )
  }else if(restaurantInfo==4){
    return(
      <ScrollView style={styles.container} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        {buscador()}
        {headers(props.route.params.productInfo)}
        <FlatList
          data={menuVar.MENU4}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem= {itemData => (
            <PlatilloCard {...props} productInfo={itemData.item}/>
          )}
        />
      </ScrollView>
    )
  }else if(restaurantInfo==5){
    return(
      <ScrollView style={styles.container} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        {buscador()}
        {headers(props.route.params.productInfo)}
        <FlatList
          data={menuVar.MENU5}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem= {itemData => (
            <PlatilloCard {...props} productInfo={itemData.item}/>
          )}
        />
      </ScrollView>
    )
  }
}
export default ScreenRestaurante;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  style1:{
    height:Dimensions.get('window').height * 0.150,
    width:Dimensions.get('window').width * 1,
    // backgroundColor:'#A00',
    // backgroundColor:'#F7F8FA',
    borderRadius:15,
    flex:1,
    flexDirection: "row",
    justifyContent:'space-around',

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // elevation: 7,
  },
  input:{
    width: Dimensions.get('window').width*0.75,
    height:'37%',
    marginTop:'14%',
    marginLeft:'19%',
    backgroundColor:'white',
    borderRadius:5,
    paddingLeft:17,
    fontFamily: 'Nunito-Light',
    flexDirection: "row",
    color:'black',
    borderColor:'grey',
    borderWidth:0.18,
    overflow: 'hidden',
  },
  botonBuscar1:{
    marginLeft:Dimensions.get('window').width*0.83,
    marginTop: '-10.7%',
    backgroundColor: '#F4503E',
    height:'33%',
    width:'10%',
    overflow: "hidden",
    borderRadius: 5,
  },
  botonBuscar2:{
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow:{
    position:'absolute',
    marginTop:'16%',
    marginLeft:'7%'
  },
  
  resLogoImg:{
    width: Dimensions.get('window').width*0.20,
    height: Dimensions.get('window').width*0.20,
    left: Dimensions.get('window').width*0.05,
  },
  resImg:{
    width: Dimensions.get('window').width*1,
    height: Dimensions.get('window').width*0.8,
    position: 'absolute',
    marginTop: -Dimensions.get('window').height * 0.150,
  },
  headerOutInfo:{
    marginLeft: Dimensions.get('window').width*0.05,
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.3,
    // backgroundColor: 'red',
    flexDirection: 'row',
    paddingTop: Dimensions.get('window').width*0.05,
  },
  headerOutInfoText:{
    marginLeft: Dimensions.get('window').width*0.07,
    marginTop: Dimensions.get('window').width*0.03,
  },
  headerOutInfoText1:{
    color: 'white',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  headerOutInfoText2:{
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  headerIn:{
    marginLeft: Dimensions.get('window').width*0.05,
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.3,
    paddingTop: Dimensions.get('window').width*0.05,
    borderRadius: 35,
    backgroundColor: 'white',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    // flexDirection: 'row'
    
  },
  resIconInfo:{
    flexDirection: 'row',
    marginLeft: Dimensions.get('window').width*0.05,
    marginBottom: Dimensions.get('window').width*0.02,
    alignContent: 'center',
    // justifyContent: 'center',
  },
  resInfoText:{
    fontFamily:'Nunito-SemiBold',
    fontSize: 10,
    position: 'absolute',
    marginTop: Dimensions.get('window').width*0.009,
    marginLeft: Dimensions.get('window').width*0.1,
  },
  iconHeart:{
    position: 'absolute',
    marginLeft: Dimensions.get('window').width*0.625,
    marginTop: Dimensions.get('window').width*0.025,
    width: Dimensions.get('window').width*0.1,
    height: Dimensions.get('window').width*0.1,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  iconShare:{
    position: 'absolute',
    marginLeft: Dimensions.get('window').width*0.75,
    marginTop: Dimensions.get('window').width*0.025,
    width: Dimensions.get('window').width*0.1,
    height: Dimensions.get('window').width*0.1,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonsDeliveryMethod:{
    marginTop: Dimensions.get('window').width*0.025,
    marginLeft: Dimensions.get('window').width*0.05,
    width: Dimensions.get('window').width*0.8,
    height: Dimensions.get('window').width*0.12,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    overflow: 'hidden',
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  deliveryOn:{
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.12,
    backgroundColor: '#322826',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  deliveryOff:{
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').width*0.12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryTextOn:{
    fontFamily:'Nunito-Bold',
    fontSize: 12.5,
    color: 'white',
  },
  deliveryTextOff:{
    fontFamily:'Nunito-Bold',
    fontSize: 12.5,
    color: 'gray',
  },
  buttonAdicional:{
    marginTop: Dimensions.get('window').width*0.05,
    marginLeft: Dimensions.get('window').width*0.05,
    width: Dimensions.get('window').width*0.8,
    height: Dimensions.get('window').width*0.08,
    backgroundColor: 'white',
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignItems:'center',
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textAdicional1:{
    fontFamily:'Nunito-Bold',
    fontSize: 8,
    color: '#322826',
  },
  textAdicional2:{
    fontFamily:'Nunito-Bold',
    fontSize: 8,
    color: '#2AA761',
  }
});