//SCREEN 4
import React from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView} from "react-native";
import { Ionicons } from '@expo/vector-icons';


const ScreenMenuPrincipal = () =>{
    return(
        <ScrollView style={styles.container}>
            <View style={styles.style1}> 
              <Text>Dirección y buscador</Text>
            </View> 
            <View style={styles.style2}>
              <Text>Secciones</Text>
            </View>
            <View style={styles.style3}>
              <Text>Anuncios</Text>
            </View>
            <View style={styles.style4}>
              <Text>Restaurantes</Text>
            </View>
            <View style={styles.style5}>
              <Text>Supermercados</Text>
            </View>
            <View style={styles.style6}>
              <Text>Farmacias</Text>
            </View>
            <View style={styles.style7}>
              <Text>Tiendas</Text>
            </View>
        </ScrollView>
    )
}

export default ScreenMenuPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  style1:{
    height:Dimensions.get('window').height * 0.230,
    width:Dimensions.get('window').width * 1,
    backgroundColor:'red',
  },
  style2:{
    height:Dimensions.get('window').height * 0.340,
    width:Dimensions.get('window').width * 1,
    backgroundColor:'green'
  },
  style3:{
    height:Dimensions.get('window').height * 0.150,
    width:Dimensions.get('window').width * 1,
    backgroundColor:'blue'
  },
  style4:{
    backgroundColor:'purple',
    width: Dimensions.get('window').width * 1,
    height:Dimensions.get('window').height * 1,
  },
  style5:{

  },
  style6:{

  },
  style7:{

  },
});