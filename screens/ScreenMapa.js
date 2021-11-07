//SCREEN 9?
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Divider } from "react-native-elements";
import TouchableCmp from "../componentes/UI/TouchableCmp";
import MapView from "react-native-maps";

const defaultLocation = {
  latitude: 20.704078,
  longitude: -100.443837,
  latitudeDelta: 0.00422,
  longitudeDelta: 0.00421,
};

const ScreenMapa = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={defaultLocation}
          mapType={"hybrid"}
        ></MapView>
      </View>

      <View style={styles.back}>
        <TouchableCmp style={styles.topButton}>
          <Image
            style={styles.icon}
            source={require("../Images/backArrow.png")}
          />
        </TouchableCmp>
      </View>

      <View style={styles.supportView}>
        <TouchableCmp style={styles.topButton}>
          <Image
            style={styles.icon}
            source={require("../Images/support.png")}
          />
        </TouchableCmp>
      </View>

      <View style={styles.time}>
        <Text style={styles.deliveryText}>Entrega estimada:</Text>
        <Text style={styles.deliveryTime}>10:58 pm</Text>
      </View>

      <View style={styles.data}>
        <View style={styles.rappiPhoto}>
          <Image
            style={styles.rappiDeliver}
            source={require("../Images/rappiDeliver.png")}
          />
        </View>
        <View style={styles.rappiData}>
          <Text style={styles.rappiName}>Lord Ivan</Text>
          <Text style={styles.info}>Tu Rappi</Text>
          <Image style={styles.logoPhone} source={require("../Images/phone.png")} />
          <Image style={styles.logoMsg} source={require("../Images/message.png")} />
          <Divider style={styles.separatorLine} />
          <Text style={styles.tipText}>Propina:</Text>
          <Text style={styles.tipQuantity}>$10.00</Text>
        </View>
      </View>

      <View style={styles.order}>
        <View style={styles.orderTime}>
          <Text style={styles.orderTimeText}>22:42 PM</Text>
        </View>
        <View style={styles.orderInfo}>
          <Text style={styles.orderText}>Su orden esta lista y va en camino!</Text>
        </View>
      </View>
    </View>
  );
};

export default ScreenMapa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  separatorLine: {
    marginTop: '10%',
    marginHorizontal: "1%",
    margin: StyleSheet.hairlineWidth,
  },
  back: {
    position: "absolute",
    top: 30,
    left: 30,
    height: 60,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  supportView: {
    position: "absolute",
    top: 30,
    right: 10,
  },
  topButton: {
    position: "relative",
    backgroundColor: "#ecf0f1",
    marginLeft: "10%",
    height: 50,
    width: 50,
    top: 15,
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: "12%",
    borderRadius: 30,
  },
  icon: {
    resizeMode: "contain",
    height: 30,
    width: 30,
  },
  time: {
    position: "absolute",
    top: "65%",
    height: 50,
    width: "20%",
    marginLeft: "70%",
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    borderColor: "#bdc3c7",
  },
  deliveryText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#bdc3c7",
    top: "10%",
    marginLeft: "10%",
  },
  deliveryTime: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2f3640",
    top: "15%",
    marginLeft: "18%",
  },
  data: {
    position: "absolute",
    top: "72%",
    height: 130,
    width: "95%",
    marginLeft: "2%",
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    borderColor: "#bdc3c7",
  },
  rappiPhoto: {
    position: "absolute",
    top: "5%",
    height: 60,
    width: 50,
    marginLeft: "5%",
    backgroundColor: "#f5f6fa",
    borderRadius: 50,
  },
  rappiDeliver: {
    resizeMode: "contain",
    height: 50,
    width: 50,
    marginTop: "5%",
    marginLeft: "10%",
  },
  rappiData: {
    position: "absolute",
    top: "10%",
    height: 60,
    width: "80%",
    marginLeft: "28%",
  },
  rappiName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2f3640",
    top: "10%",
  },
  info: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#bdc3c7",
    top: "12%",
  },
  logoPhone: {
    resizeMode: "contain",
    height: 25,
    width: 25,
    marginTop: "-10%",
    marginLeft: "65%",
  },
  logoMsg: {
    resizeMode: "contain",
    height: 25,
    width: 25,
    marginTop: "-9%",
    marginLeft: "80%",
  },
  tipText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#bdc3c7",
    top: "25%",
    marginLeft: "-25%",
  },
  tipQuantity: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2f3640",
    top: "-8%",
    marginLeft: "56%",
  },
  order: {
    position: "absolute",
    top: "90%",
    height: 70,
    width: "95%",
    marginLeft: "2%",
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    borderColor: "red",
  },
  orderTime: {
    position: "absolute",
    top: "5%",
    height: 50,
    width: "20%",
    marginLeft: "70%",
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    borderColor: "#bdc3c7",
  },
  orderTimeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#bdc3c7",
    top: "10%",
    marginLeft: "-225%",
  },
  orderInfo: {
    position: "absolute",
    top: "45%",
    height: 50,
    width: "70%",
    marginLeft: "9%",
  },
  orderText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2f3640",
  },
});
