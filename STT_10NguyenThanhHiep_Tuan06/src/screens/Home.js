import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../../assets/IMG/vs_black.png")}
          style={styles.imgB}
        ></Image>
      </View>

      <View style={styles.view1}>
        <Text style={styles.text}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>

      <View style={styles.group}>
        <Rating
          imageSize={25}
          // onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10, paddingLeft: 20 }}
        />
        <Text style={styles.text1}>(Xem 200 đánh giá)</Text>
      </View>

      <View style={styles.group1}>
        <Text style={styles.text2}>1.790.000 đ</Text>
        <Text style={styles.text3}>1.990.000 đ</Text>
      </View>

      <View style={styles.group2}>
        <Text style={styles.text4}>Ở đâu rẻ hơn thì mua</Text>
        <Image source={require('../../assets/IMG/question.png')} style={styles.imgQ}/>
      </View>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  view: {
    alignItems: "center",
  },
  view1: {
    alignItems: "flex-start",
  },
  text: {
    flexGrow: 0.8,
    padding: 20,
    fontSize: 18,
    fontWeight: 500,
  },
  text1: {
    padding: 10,
    paddingRight: 50,
    fontSize: 18,
  },
  text2: {
    padding: 20,
    paddingRight: 50,
    fontSize: 18,
    fontWeight: 500,
  },
  text3: {
    padding: 20,
    paddingRight: 50,
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  text4: {
    padding: 20,
    paddingRight: 50,
    fontSize: 18,
    fontWeight: 600,
    color: "red",
  },
  imgB: {
    width: 301,
    height: 361,
    resizeMode: "contain",
    alignItems: "center",
  },
  imgQ:{
    width:20,
    height:20,
    marginTop:20,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  group1: {
    flexDirection: "row",
  },
  group2: {
    flex:1,
    flexDirection: "row",
  },
});

export default Home;
