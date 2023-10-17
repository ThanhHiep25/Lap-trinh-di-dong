import React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import seachList from "../../../dataSeach";
import { Rating } from "react-native-ratings";

const Body = () => {
  return (
    <View style={styles.container}>
      {seachList.map((item) => (
        <View style={styles.subcontainer}>
          <Pressable style={styles.Pre}>
            <Image source={item.img} style={styles.img}></Image>
            <Text style={styles.text}>{item.name}</Text>

            <View style={styles.view}>
              <Rating imageSize={17} style={styles.rate}></Rating>
              <Text>({item.comment})</Text>
            </View>

            <View style={styles.view}>
              <Text style={styles.text1}>{item.price}</Text>
              <Text style={styles.text2}>{item.sale}</Text>
            </View>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  subcontainer: {
    margin: 10,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    height: 90,
    width: 155,
  },
  text: {
    width: 150,
    fontSize: 16,
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  text2: {
    fontSize: 16,
  },
  rate: {
    paddingVertical: 10,
  },Pre:{
    backgroundColor:'#EBFFFA',
    padding:10,
    borderRadius:15,
  }
});

export default Body;
