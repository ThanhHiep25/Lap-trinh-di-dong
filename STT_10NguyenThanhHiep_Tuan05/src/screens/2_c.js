import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Header from "./../components/2c/header";
import Body from "./../components/2c/body";
import { useNavigation } from "@react-navigation/native";

const C = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.btn}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("./../../assets/IMG/Group6.png")}
            style={styles.imgG}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
  },
  btn: {
    alignItems: "flex-start",
    margin: 50,
  },
  imgG: {
    width: 50,
    height: 50,
  },
});

export default C;
