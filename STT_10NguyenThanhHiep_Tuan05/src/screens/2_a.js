import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Header from "./../components/2a/header";
import Body from "./../components/2a/body";

const A = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FBCB00',
    }
});

export default A;
