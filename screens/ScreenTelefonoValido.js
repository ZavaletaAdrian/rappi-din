//SCREEN 2

import React from 'react';
import {View, StyleSheet, Text} from "react-native";


const ScreenTelefonoValido = () =>{
    return(
        <View style={styles.container}>
            <Text>SCREEN 2</Text>
        </View>
    )
}

export default ScreenTelefonoValido;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});