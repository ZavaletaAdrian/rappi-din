import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import ScreenLogin from "../screens/ScreenLogin";
import ScreenTelefonoValido from "../screens/ScreenTelefonoValido";
import ScreenCodigoAuth from "../screens/ScreenCodigoAuth";
import ScreenMenuPrincipal from "../screens/ScreenMenuPrincipal";

import ScreenMapa from "../screens/ScreenMapa";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ScreenMenuPrincipal"
        component={ScreenMenuPrincipal}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="orange" />,
        }}
      />
      <Tab.Screen
        name="ScreenMapa"
        component={ScreenMapa}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="orange" />,
        }}
      />
    </Tab.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ScreenMenuPrincipal"
        component={ScreenMenuPrincipal}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="orange" />,
        }}
      />
      <Tab.Screen
        name="ScreenMapa"
        component={ScreenMapa}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="orange" />,
        }}
      />
    </Tab.Navigator>
  );
};

export const StackLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ScreenLogin"}
        component={ScreenLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenTelefonoValido"
        component={ScreenTelefonoValido}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ScreenCodigoAuth"}
        component={ScreenCodigoAuth}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;