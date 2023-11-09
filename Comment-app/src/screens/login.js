import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../../assets/IMG/imgLogin.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.view1}>
        <Text style={styles.text}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D39DEDB8",
  },
  view: {
    alignItems: "center",
    margin: 20,
  },
  view1: {
    alignItems: "center",
    margin: 20,
  },
  img: {
    height: 180,
    width: 180,
    resizeMode: "contain",
  },

  text: {
    fontSize: 40,
    fontWeight: 700,
    color: "#ffff",
    fontFamily: "Arial",
  },
});
