import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import dataHome from "../../../datahome";

const Body = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text>Mọi thắc mắc xin liên hệ shop qua khung chat</Text>
      </View>

      {dataHome.map((item) => (
        <View style={styles.view1}>
          <Image source={item.imageLocal} style={styles.img} />

           <View style={styles.view2}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text1}>Shop : {item.shop}</Text>
          </View>

          <Pressable style={styles.Pre}>
            <Text style={styles.textChat}>Chat</Text>
          </Pressable>
        </View>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
  },
  view: {
    alignItems: "center",
    margin: 20,
    marginBottom: 40,
    backgroundColor: "#FFCF96",
    height: 50,
    padding: 15,
    borderRadius: 10,
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:'center',
    padding:20,
    margin:5,
    borderRadius:20,
    backgroundColor:'#EBFFFA'
  },
  view2: {
    flexDirection: "column",
  },
  img: {
    width: 74,
    height: 74,
    borderRadius:5,
  },
  text: {
    fontSize: 16,
    fontWeight:500,
    width:150,
  },
  text1: {
    fontSize: 16,
    color: "red",
    paddingTop:10,
    width:150,
  },
  textChat:{
    textAlign:'center',
    padding:7,
    fontSize:16,
    color:'#ffff',
  },
  Pre:{
    height:38,
    width:88,
    backgroundColor:'#F31111',
  }
});

export default Body;
