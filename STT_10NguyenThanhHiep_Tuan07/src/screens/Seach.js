import React from 'react';
import {  StyleSheet, Text, View, } from 'react-native';
import Header from '../components/Seachscreen/Header';
import Footer from '../components/Seachscreen/Footer';
import Body from '../components/Seachscreen/Body';

const Seach = () => {
    return(
        <View style={styles.container}>
          <Header/>
          <Body/>
          <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#ffff',
    }
})


export default Seach;