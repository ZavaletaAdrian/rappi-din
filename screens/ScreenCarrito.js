import React from 'react';
import {StyleSheet, View, Text, Dimensions, Button, FlatList} from 'react-native';
import CartItem from '../componentes/cartItem';
import { useSelector } from 'react-redux';

const ScreenCarrito = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartTotal = useSelector(state => state.cart.total);
    return (
      <View style={styles.container}>
        <FlatList
            data={cartItems}
            showsVerticalScrollIndicator={true}
            keyExtractor={item => item.id}
            renderItem={itemData =>(
                <CartItem item={itemData.item}/>
            )}
        />
        <View style={styles.footerCartContainer}>
            <Text style={styles.summaryText}>
                {'Total: '}
                <Text style={styles.amount}>$ {cartTotal} MXN</Text>
            </Text>
            <View style={{width:'30%'}}>
                <Button
                    title={'Continue'}
                    onPress={()=>console.log("Continue")}
                />
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: 'white',
      alignItems: 'center',
  },
  footerCartContainer:{
      flexDirection:'row',
      width:'100%',
      height:Dimensions.get('window').height *0.07,
      paddingHorizontal:10,
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'grey',
      position:'absolute',
      bottom:0,
      borderTopRightRadius:15,
      borderTopLeftRadius:15,
  },
  summaryText: {
      fontFamily: 'roboto-bold',
      fontSize: 16,
      color:'black'
  },
});

export default ScreenCarrito;