import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/IMG/notes.png")}
          style={styles.img}
        />
      </View>

      <View style={styles.view}>
        <Text style={styles.text}>MANAGE YOUR TASK</Text>
      </View>

      <View style={styles.view1}>
        <Image
          source={require("../../assets/IMG/mail.png")}
          style={styles.img1}
        />
        <TextInput style={styles.textIn} placeholder="Email"></TextInput>
      </View>

      <View style={styles.view2}>
        <Pressable style={styles.Pre}>
          <Text style={styles.textPre}>GET STARTED</Text>
          <Image
            source={require("../../assets/IMG/right-arrow.png")}
            style={styles.img2}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    marginTop: 50,
  },
  view1: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  view2: {
    marginTop: 50,
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  img1: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    position: "absolute",
    left: 20,
  },
  img2: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    width: 200,
    textAlign: "center",
  },
  textIn: {
    width: 330,
    height: 50,
    fontSize: 20,
    fontWeight: 500,
    paddingLeft: 70,
    padding: 10,
    backgroundColor: "#D2E3C8",
    borderRadius: 20,
    color: "#F875AA",
  },
  Pre: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFA33C",
    width: 230,
    height:50,
    borderRadius:20,
  },
  textPre: {
    fontSize: 20,
    fontWeight: 700,
    color:'#fff'
  },
});
