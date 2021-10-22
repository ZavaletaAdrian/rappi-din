//SCREEN 1
import React from 'react';
import {View, StyleSheet, Button, Text} from "react-native";

const ScreenLogin = () =>{
    return(
      <View style={styles.container}>
          <Text>RAPPI-DIN LOGO</Text>
          <Text>Restaurantes, supermercados,</Text>
          <Text style={{marginBottom:50}}>farmacias y ¡mucho más?</Text>
          <Button
            style={styles.button}
            title={"Continúa con Google"}
            color='#4383F4'
            />
          <Button
            style={styles.button}
            title={"Continúa con tu celular"}
            color='#2AD881'
          />
          <Button
            style={styles.button}
            title={"Continúa con Facebook"}
            color='#1476F1'
          />
        </View>
    )
}
export default ScreenLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});