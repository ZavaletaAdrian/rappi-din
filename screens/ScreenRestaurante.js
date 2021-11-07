//SCREEN 6
import React, { useState } from 'react';
import {View, StyleSheet, FlatList, Dimensions, ScrollView, TextInput} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import * as menuVar from '../dummy-data/data';
import TouchableCmp from '../componentes/UI/TouchableCmp';


import { RESTAURANT } from '../dummy-data/data';
import PlatilloCard from '../componentes/PlatilloCard';

const ScreenRestaurante = (props) =>{
  // const [restaurantInfo, setrestaurantInfo] = useState(null)
  const restaurantInfo = props.route.params.productInfo.id

  if (restaurantInfo==1){
    return(
      <ScrollView style={styles.container} stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.style1}>
          <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="black" /*onPress={regresar}*//> 
          </View>
          <TextInput
            style={styles.input}
            placeholder="Buscar en rappi..."
          />
          <View style={styles.botonBuscar1}>
            <TouchableCmp >
              <View style={styles.botonBuscar2}>
                <Entypo name="magnifying-glass" size={24} color={"#FFFFFF"} />
                {/* <Text>Hola</Text> */}
              </View>
            </TouchableCmp>
          </View>
        </View>
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
        <View style={styles.style1}>
          <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="black" /*onPress={regresar}*//> 
          </View>
          <TextInput
            style={styles.input}
            placeholder="Buscar en rappi..."
          />
          <View style={styles.botonBuscar1}>
            <TouchableCmp >
              <View style={styles.botonBuscar2}>
                <Entypo name="magnifying-glass" size={24} color={"#FFFFFF"} />
                {/* <Text>Hola</Text> */}
              </View>
            </TouchableCmp>
          </View>
        </View>
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
        <View style={styles.style1}>
          <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="black" /*onPress={regresar}*//> 
          </View>
          <TextInput
            style={styles.input}
            placeholder="Buscar en rappi..."
          />
          <View style={styles.botonBuscar1}>
            <TouchableCmp >
              <View style={styles.botonBuscar2}>
                <Entypo name="magnifying-glass" size={24} color={"#FFFFFF"} />
                {/* <Text>Hola</Text> */}
              </View>
            </TouchableCmp>
          </View>
        </View>
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
        <View style={styles.style1}>
          <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="black" /*onPress={regresar}*//> 
          </View>
          <TextInput
            style={styles.input}
            placeholder="Buscar en rappi..."
          />
          <View style={styles.botonBuscar1}>
            <TouchableCmp >
              <View style={styles.botonBuscar2}>
                <Entypo name="magnifying-glass" size={24} color={"#FFFFFF"} />
                {/* <Text>Hola</Text> */}
              </View>
            </TouchableCmp>
          </View>
        </View>
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
        <View style={styles.style1}>
          <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="black" /*onPress={regresar}*//> 
          </View>
          <TextInput
            style={styles.input}
            placeholder="Buscar en rappi..."
          />
          <View style={styles.botonBuscar1}>
            <TouchableCmp >
              <View style={styles.botonBuscar2}>
                <Entypo name="magnifying-glass" size={24} color={"#FFFFFF"} />
                {/* <Text>Hola</Text> */}
              </View>
            </TouchableCmp>
          </View>
        </View>
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

// const ScreenRestaurante = (props) =>{
//   const [menuFlatlist, setMenuFlatlist] = useState(null)
//   const restaurantInfo = props.route.params.productInfo.id
//   console.log("RESTAURANT INFO:" + restaurantInfo)
//   // var menuFlatlist;
  
//   switch(restaurantInfo){
//     case 1:
//       setMenuFlatlist(menuVar.MENU1)
//     case 2:
//       setMenuFlatlist(menuVar.MENU2)
//     case 3:
//       setMenuFlatlist(menuVar.MENU3)
//     case 4:
//       setMenuFlatlist(menuVar.MENU4)
//     case 5:
//       setMenuFlatlist(menuVar.MENU5)
//   }
//   console.log("MENU FLATLIST:" + menuFlatlist)
//   return(
//     <View style={styles.container}>
//         <FlatList
//             data={menuFlatlist}
//             showsVerticalScrollIndicator={false}
//             keyExtractor={item => item.id} //for del 1 al 5 xdd
//             renderItem= {itemData => (
//               <PlatilloCard {...props} productInfo={itemData.item}/>
//             )}
//           />
//     </View>
//   )
// }
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
    backgroundColor:'#F7F8FA',
    borderRadius:15,
    flex:1,
    flexDirection: "row",
    justifyContent:'space-around',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  input:{
    width:'55%',
    height:'37%',
    marginTop:'14%',
    marginLeft:'19%',
    backgroundColor:'white',
    borderRadius:15,
    paddingLeft:17,
    fontFamily: 'Nunito-Light',
    flexDirection: "row",
    color:'black'
  },
  botonBuscar1:{
    marginLeft:'77%',
    marginTop: '-11.25%',
    backgroundColor: '#F4503E',
    height:'37%',
    width:'15%',
    overflow: "hidden",
    borderRadius: 10,
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
  }
});