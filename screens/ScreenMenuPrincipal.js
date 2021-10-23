//SCREEN 4
import React from 'react';
import {View, StyleSheet, Text} from "react-native";


const ScreenMenuPrincipal = () =>{
    return(
        <View style={styles.container}>
            <Text>SCREEN 4</Text>
        </View>
    )
}

export default ScreenMenuPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});