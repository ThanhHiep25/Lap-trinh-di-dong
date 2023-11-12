import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

const Like = () => {
  return (
    <View style={styles.containerlike}>
      <View style={styles.container}>
        <Pressable style={styles.Pre}>
          <Image source={require("../../assets/like.png")} style={styles.img} />
        </Pressable>
        <Pressable style={styles.Pre}>
          <Image
            source={require("../../assets/thumbs-down-.png")}
            style={styles.img}
          />
        </Pressable>
        <Pressable style={styles.Pre}>
          <Image
            source={require("../../assets/checklist.png")}
            style={styles.img}
          />
        </Pressable>
        <Pressable style={styles.Pre}>
          <Image
            source={require("../../assets/share.png")}
            style={styles.img}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Like;

const styles = StyleSheet.create({
  containerlike: {
    alignItems: "center",
    margin: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  Pre: {
    height: 40,
    width: 60,
    backgroundColor: "#5a5858",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
