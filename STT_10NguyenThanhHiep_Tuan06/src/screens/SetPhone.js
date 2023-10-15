import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

const Set = (route) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../../assets/IMG/vs_black.png")}
          style={styles.img}
        ></Image>
        <Text style={styles.text}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>

      <View style={styles.view1}>
        <Text style={styles.text1}>Chọn màu mong muốn:</Text>
        <Pressable style={styles.Pre1}></Pressable>
        <Pressable style={styles.Pre2}></Pressable>
        <Pressable style={styles.Pre3}></Pressable>
        <Pressable style={styles.Pre4}></Pressable>
        <Pressable style={styles.Pre5}>
          <Text style={styles.text2}>Xong</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    flex: 2,
    backgroundColor: "#C4C4C4",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },
  img: {
    height: 128,
    width: 114,
    resizeMode: "contain",
    margin: 20,
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 500,
  },
  text1: {
    fontSize: 18,
    fontWeight: 500,
    left: -100,
  },
  text2: {
    textAlign: "center",
    padding:10,
    fontSize: 18,
    fontWeight: 500,
  },
  Pre1: {
    height: 80,
    width: 80,
    backgroundColor: "#C5F1FB",
    borderRadius: 20,
    margin: 10,
  },
  Pre2: {
    height: 80,
    width: 80,
    backgroundColor: "#F30D0D",
    borderRadius: 20,
    margin: 10,
  },
  Pre3: {
    height: 80,
    width: 80,
    backgroundColor: "#000000",
    borderRadius: 20,
    margin: 10,
  },
  Pre4: {
    height: 80,
    width: 80,
    backgroundColor: "#234896",
    borderRadius: 20,
    margin: 10,
  },
  Pre5: {
    height: 50,
    width: 330,
    backgroundColor: "#1952E294",
    borderRadius: 20,
    margin: 10,
  },
});

export default Set;
