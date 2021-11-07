//SCREEN 6
import React, { useState } from 'react';
import {View, StyleSheet, FlatList} from "react-native";

import * as menuVar from '../dummy-data/data';

import { RESTAURANT } from '../dummy-data/data';
import PlatilloCard from '../componentes/PlatilloCard';

const ScreenRestaurante = (props) =>{
  // const [restaurantInfo, setrestaurantInfo] = useState(null)
  const restaurantInfo = props.route.params.productInfo.id

  if (restaurantInfo==1){
    return(
      <View style={styles.container}>
          <FlatList
              data={menuVar.MENU1}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem= {itemData => (
                <PlatilloCard {...props} productInfo={itemData.item}/>
              )}
            />
      </View>
    )
  }else if(restaurantInfo==2){
    return(
      <View style={styles.container}>
          <FlatList
              data={menuVar.MENU2}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem= {itemData => (
                <PlatilloCard {...props} productInfo={itemData.item}/>
              )}
            />
      </View>
    )
  }else if(restaurantInfo==3){
    return(
      <View style={styles.container}>
          <FlatList
              data={menuVar.MENU3}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem= {itemData => (
                <PlatilloCard {...props} productInfo={itemData.item}/>
              )}
            />
      </View>
    )
  }else if(restaurantInfo==4){
    return(
      <View style={styles.container}>
          <FlatList
              data={menuVar.MENU4}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem= {itemData => (
                <PlatilloCard {...props} productInfo={itemData.item}/>
              )}
            />
      </View>
    )
  }else if(restaurantInfo==5){
    return(
      <View style={styles.container}>
          <FlatList
              data={menuVar.MENU5}
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
});