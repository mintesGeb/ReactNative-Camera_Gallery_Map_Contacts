import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Components/Home.js";
import Camera from "./Components/Camera.js";
import Gallery from "./Components/Gallery.js";

import Map from "./Components/Map.js";
import Contacts from "./Components/Contacts.js";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
});
