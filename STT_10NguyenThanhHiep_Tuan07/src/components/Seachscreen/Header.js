import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TextInput,
} from "react-native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../../../assets/IMG/outlined.png")}
          style={styles.img}
        ></Image>
      </Pressable>

      <Image
        source={require("../../../assets/IMG/Chat/whh_magnifier.png")}
        style={styles.img2}
      ></Image>
      <TextInput style={styles.textIn} placeholder="Dây cáp"></TextInput>

      <Pressable>
        <Image
          source={require("../../../assets/IMG/bi_cart-check.png")}
          style={styles.img}
        ></Image>
      </Pressable>

      <Pressable>
        <Image
          source={require("../../../assets/IMG/Chat/Group 2.png")}
          style={styles.img1}
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
    height: 50,
    backgroundColor: "#1BA9FF",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  img: {
    width: 24,
    height: 24,
  },
  img1: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  img2: {
    position:'relative',
    left:58,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  text: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: 500,
  },
  textIn: {
    height: 30,
    width: 190,
    backgroundColor: "#ffff",
    padding: 10,
    paddingLeft: 40,
    borderRadius:10,
  },
});

export default Header;
