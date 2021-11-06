//SCREEN 4
import React from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView, TextInput, FlatList} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Divider } from "react-native-elements";
import SeccionesCard from '../componentes/SeccionesCard';
import {SECTIONS} from "../dummy-data/sections"

const ScreenMenuPrincipal = (props) =>{

    return(
        <ScrollView style={styles.container} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
            <View style={styles.style1}> 
              <TextInput
                style={styles.input}
                placeholder="Buscar en rappi..."
              />
            </View> 
            <View style={styles.style2}>
              <View style={styles.encabezado}>
                <Text style={styles.secciones}>Secciones</Text>
                <Text style={styles.verTodo}>Ver todos</Text>
              </View>
              <View style={styles.cuerpo}>
                <FlatList 
                  data={SECTIONS}
                  horizontal
                  contentContainerStyle ={{paddingHorizontal:15}}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  renderItem = {itemData =>(
                    <SeccionesCard {...props} productInfo={itemData.item}/>
                  )}
                />
              </View>
            </View>
            <View style={styles.style3}>
              <View style={styles.encabezado}>
                <Text style={styles.restaurantes}>Restaurantes</Text>
                <Text style={styles.verTodo2}>Ver todos</Text>
              </View>
              <View >
                <Text>A</Text>
              </View>
            </View>
        </ScrollView>
    )
}

export default ScreenMenuPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  style1:{
    height:Dimensions.get('window').height * 0.150,
    width:Dimensions.get('window').width * 1,
    backgroundColor:'#F7F8FA',
    borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  style2:{
    height:Dimensions.get('window').height * 0.310,
    width:Dimensions.get('window').width * 1,
    backgroundColor:'#FBFBFB'
  },
  style3:{
    backgroundColor:'#FFFCF3',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * 1,
  },
  style4:{

  },
  style5:{

  },
  style6:{

  },
  input:{
    width:'68%',
    height:'37%',
    marginTop:'16%',
    marginLeft:'7%',
    backgroundColor:'white',
    borderRadius:15,
    paddingLeft:17,
    fontFamily: 'Nunito-Light'
  },
  secciones:{
    fontFamily: 'Nunito-ExtraBold',
    fontSize:20
  },
  encabezado:{
    flexDirection:'row',
    width:'85%',
    marginLeft:'7.5%',
    justifyContent:'space-between',
    height: Dimensions.get('window').height * 0.130,
    alignContent:'center',
    alignItems:'center'
  },
  verTodo:{
    fontFamily: 'Nunito-ExtraBold',
    fontSize:14,
    color:'#2BD781',
    marginTop:5
  },
  cuerpo:{
    height: Dimensions.get('window').height * 0.180,
    backgroundColor:'#FCFCFC'
  },
  restaurantes:{
    fontFamily: 'Nunito-ExtraBold',
    fontSize:35,
    color:'#F4503E'
  },
  verTodo2:{
    fontFamily: 'Nunito-ExtraBold',
    fontSize:14,
    color:'#D44838',
    marginTop:5
  },
});