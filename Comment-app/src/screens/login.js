import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image />
      </View>
      <View style={styles.view}>
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
  text: {
    fontSize: 40,
    fontWeight: 700,
    color: "#ffff",
    fontFamily: "Inter-Regular",
  },
});
