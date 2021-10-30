//SCREEN 3

import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert, Button } from "react-native";
import { useDispatch } from "react-redux";
import * as authActions from "../validators/actions/authActions";



const ScreenCodigoAuth = () =>{
  const [code, setCode] = useState(null);
  const dispatch = useDispatch();

  const onClick = () => {
    try {
      code
        ? dispatch(authActions.tryCode(code))
        : Alert.alert("Alert", "Campos Vacios!", [{ text: "Ok" }]);
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };

  const validateCode = (code) => {
    setCode(code);
  };

    return(
      <View style={styles.container}>
        <Text>Ingresar codigo</Text>
        <TextInput
          style={styles.input}
          placeholder="****"
          onChangeText={(text) => validateCode(text)}
          keyboardType = 'numeric'
      />

      <Button
        style={styles.button}
        title={"Continúa con tu código"}
        color="#2AD881"
        onPress={onClick}
      />
      </View>
    )
}

export default ScreenCodigoAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#535c68",
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 30,
  },
});