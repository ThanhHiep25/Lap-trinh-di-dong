import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Footer = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          source={require("../../../assets/IMG/list.png")}
          style={styles.img}
        ></Image>
      </Pressable>

      <Pressable>
        <Image
          source={require("../../../assets/IMG/home.png")}
          style={styles.img}
        ></Image>
      </Pressable>

      <Pressable>
        <Image
          source={require("../../../assets/IMG/previous.png")}
          style={styles.img}
        ></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: "#1BA9FF",
    position: "sticky",
    zIndex: 1,
  },
  img: {
    width: 24,
    height: 24,
  },
  text: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: 500,
  },
});

export default Footer;
