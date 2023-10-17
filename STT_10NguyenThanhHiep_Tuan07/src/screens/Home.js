import React from "react";
import { View, StyleSheet,Text } from "react-native";
import  Header  from "../components/Homescreen/Header";
import Body from "../components/Homescreen/Body";
import Footer from "../components/Homescreen/Footer";


const Home = () => {
  return (
    <View style={styles.container}>
        <Header/>
        <Body/>
        <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default Home;
