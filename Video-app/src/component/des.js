import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const Des = () => {
  return (
    <View style={styles.container}>
         <Text style={styles.textbl}>Bình luận:</Text>
      <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
        <View style={styles.viewcomment}>
          <View style={styles.view1}>
            <Image source={require("../../assets/me.jpg")} style={styles.img} />
            <View>
              <Text style={styles.text}>Nguyen Hiep</Text>
            </View>
          </View>
          <Text style={styles.text1}>Nhac hay qua a oi</Text>
        </View>
        <View style={styles.viewcomment}>
          <View style={styles.view1}>
            <Image source={require("../../assets/me.jpg")} style={styles.img} />
            <View>
              <Text style={styles.text}>Nguyen Hiep</Text>
            </View>
          </View>
          <Text style={styles.text1}>Nhac hay qua a oi</Text>
        </View>
        <View style={styles.viewcomment}>
          <View style={styles.view1}>
            <Image source={require("../../assets/me.jpg")} style={styles.img} />
            <View>
              <Text style={styles.text}>Nguyen Hiep</Text>
            </View>
          </View>
          <Text style={styles.text1}>Nhac hay qua a oi</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Des;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  view: {
    height: 220,
    width: 400,
    padding: 20,
    backgroundColor: "#42404078",
    borderRadius: 20,
  },
  viewbl: { flexDirection: "column" },
  img: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    borderRadius: 50,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewcomment: {
    backgroundColor: "#cac5c5",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "Arial",
  },
  textbl: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Arial",
    color: "#ffff",
  },
  text1: {
    marginLeft: 50,
    fontSize: 12,
    fontWeight: 500,
    fontFamily: "Arial",
    marginTop: 10,
  },
});
