import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  tittle: {
    fontSize: 50,
    fontWeight: 700,
    left: -100,
    top: 100,
  },
});

export default Header;
