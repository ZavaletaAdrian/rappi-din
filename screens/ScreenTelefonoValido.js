//SCREEN 2
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert, Button } from "react-native";
import { useDispatch } from "react-redux";
import * as authActions from "../validators/actions/authActions";

const ScreenTelefonoValido = () => {
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const onClick = () => {
    try {
      number && password
        ? dispatch(authActions.tryLogin(number, password))
        : Alert.alert("Alert", "Campos Vacios!", [{ text: "Ok" }]);
    } catch (e) {
      Alert.alert("Error", e.toString(), [{ text: "Ok" }]);
    }
  };

  const validateNumber = (number) => {
    setNumber(number);
  };

  const validatePassword = (password) => {
    setPassword(password);
  };
  return (
    <View style={styles.container}>
      <Text>Validar Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="1234567890"
        onChangeText={(text) => validateNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="**************"
        secureTextEntry={true}
        onChangeText={(text) => validatePassword(text)}
      />
      <Button
        style={styles.button}
        title={"Continúa con tu celular"}
        color="#2AD881"
        onPress={onClick}
      />
    </View>
  );
};

export default ScreenTelefonoValido;

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
