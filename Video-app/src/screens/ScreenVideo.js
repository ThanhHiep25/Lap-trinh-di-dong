import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Image, Text, Pressable } from "react-native";
import { Video } from "expo-av";
import React from "react";
import Des from "../component/des";
const ScreenVideo = () => {
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Video
          ref={video}
          style={styles.video}
          source={{uri:'https://cdn.glitch.me/a2f08375-f202-47c4-8950-a18cdb1db74f/1.mp4'}}
          useNativeControls={true}

          resizeMode="contain"
          isLooping
        />
      </View>

      <View style={styles.viewdk_1}>
        <View style={styles.viewdk}>
          <View style={styles.view1}>
            <Image source={require("../../assets/me.jpg")} style={styles.img} />
            <View>
              <Text style={styles.text}>Nguyen Hiep</Text>
              <Text style={styles.text1}>Ca sĩ</Text>
            </View>
          </View>

          <View>
            <Pressable style={styles.Pre}>
              <Text style={styles.textdk}>Đăng ký</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Des />
      </View>

    </View>
  );
};

export default ScreenVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewdk: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
  },
  viewdk_1: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
  video: {
    height: 300,
    width: 400,
    borderRadius: 20,
    resizeMode: "contain",
  },
  img: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    borderRadius: 50,
  },
  text: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Arial",
  },
  text1: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Arial",
    marginTop: 5,
  },
  textdk: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "Arial",
    color: "#ffff",
  },
  Pre: {
    backgroundColor: "#f74c4c",
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
