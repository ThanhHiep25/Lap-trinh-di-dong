import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome, Jala!</Text>
        <Text style={styles.text1}>Choice you Best food</Text>
      </View>
      <View style={styles.view}>
        <TextInput style={styles.textIn} placeholder="Search Food"/>
        <Image source={require('../../assets/IMG/Group.png')} style={styles.search}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  view:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  text1: {
    fontSize: 20,
    fontWeight: 700,
  },
  textIn: {
    fontSize: 16,
    fontWeight: 700,
    color:'#C4C4C4',
    width:266,
    height:46,
    backgroundColor:'#C4C4C41A',
    borderWidth:1,
    borderColor:'#C4C4C4',
    padding:10,
    borderRadius:10,
  },
  search:{
    height:46,
    width:46,
    borderRadius:10,
  }
});
