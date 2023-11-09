import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export const Login = () => {

     const navigation = useNavigation();
     const route = useRoute();
     
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

      <View style={styles.view2}>
        <TextInput style={styles.textIn} placeholder="Email or User name" />
        <TextInput style={styles.textIn} placeholder="Password" />
      </View>

      <View style={styles.view3}>
        <Pressable style={styles.Pre}>
          <Text style={styles.text1}>Sumbmit</Text>
          <Image
            source={require("../../assets/IMG/sub.png")}
            style={styles.img1}
          />
        </Pressable>
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
    marginTop: 50,
  },
  view1: {
    alignItems: "center",
    margin: 20,
  },
  view2: {
    alignItems: "center",
    margin: 20,
  },
  view3: {
    alignItems: "center",
    margin: 20,
    marginTop: 50,
  },
  img: {
    height: 180,
    width: 180,
    resizeMode: "contain",
  },
  img1: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  text: {
    fontSize: 40,
    fontWeight: 700,
    color: "#ffff",
    fontFamily: "Arial",
  },
  text1: {
    fontSize: 20,
    fontWeight: 700,
    color: "#ffff",
    fontFamily: "Arial",
  },
  textIn: {
    fontSize: 20,
    fontWeight: 500,
    color: "#ffff",
    fontFamily: "Arial",
    height: 50,
    width: 330,
    marginTop: 20,
    backgroundColor: "#D9D9D978",
    color: "#E9A0A0",
    padding: 10,
    paddingLeft: 50,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  Pre: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    width: 250,
    backgroundColor: "#61BDF1",
    borderRadius: 20,
  },
});
