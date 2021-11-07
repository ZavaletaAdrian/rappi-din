//SCREEN 6
import React, { useState } from 'react';
import {View, StyleSheet, FlatList } from "react-native";

import { MENU1 } from '../dummy-data/data';
import { MENU2 } from '../dummy-data/data';
import { MENU3 } from '../dummy-data/data';
import { MENU4 } from '../dummy-data/data';
import { MENU5 } from '../dummy-data/data';

import { RESTAURANT } from '../dummy-data/data';
import PlatilloCard from '../componentes/PlatilloCard';

const ScreenRestaurante = (props) =>{
  const [idRest, setIdRest] = useState(null)

  console.log(props.route.params.productInfo.name)
  const {restaurantInfo} = props.route.params.productInfo.id

  setIdRest(restaurantInfo)
  switch(idRest){
    case 1:
      return(
        <View style={styles.container}>
            <FlatList
                data={MENU1}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem= {itemData => (
                  <PlatilloCard {...props} productInfo={itemData.item}/>
                )}
              />
        </View>
      )
    case 2:
      return(
        <View style={styles.container}>
            <FlatList
                data={MENU2}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem= {itemData => (
                  <PlatilloCard {...props} productInfo={itemData.item}/>
                )}
              />
        </View>
      )
    case 3:
      return(
        <View style={styles.container}>
            <FlatList
                data={MENU2}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem= {itemData => (
                  <PlatilloCard {...props} productInfo={itemData.item}/>
                )}
              />
        </View>
      )
    case 4:
      return(
        <View style={styles.container}>
            <FlatList
                data={MENU2}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem= {itemData => (
                  <PlatilloCard {...props} productInfo={itemData.item}/>
                )}
              />
        </View>
      )
    case 5:
      return(
        <View style={styles.container}>
            <FlatList
                data={MENU2}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem= {itemData => (
                  <PlatilloCard {...props} productInfo={itemData.item}/>
                )}
              />
        </View>
      )
  }
}

export default ScreenRestaurante;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});