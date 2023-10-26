import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { Rating } from "react-native-ratings";

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [color, setColor] = useState("vs_black.png");
  const [name , setName] = useState("Black")
  const handleChoose = () => {
    navigation.navigate("Set", { color },{ name });
  };

  useEffect(() => {
    if (route.params?.color) {
    }
  }, [route.params?.color]);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require(`../../assets/IMG/${route.params?.color ?? color}`)}
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
        <Image
          source={require("../../assets/IMG/question.png")}
          style={styles.imgQ}
        />
      </View>

      <View style={styles.group3}>
        <Pressable style={styles.Pre} onPress={() => handleChoose()}>
          <Text style={styles.text5}>Chọn màu mong muốn</Text>
          <Image
            source={require("../../assets/IMG/Vector.png")}
            style={styles.imgV}
          ></Image>
        </Pressable>
      </View>

      <View style={styles.group4}>
        <Pressable style={styles.btn} onPress={() => alert('Xác nhận mua thành công!!!')}>
          <Text style={styles.textBtn}>CHỌN MUA</Text>
        </Pressable>
      </View>
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
  text5: {
    fontSize: 16,
    textAlign: "center",
  },
  textBtn: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    padding: 10,
  },
  imgB: {
    width: 301,
    height: 361,
    resizeMode: "contain",
    alignItems: "center",
  },
  imgQ: {
    width: 20,
    height: 20,
    marginTop: 20,
  },
  imgV: {
    width: 12,
    height: 14,
    position: "absolute",
    margin: 5,
    marginLeft: 250,
  },
  Pre: {
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    width: 300,
    padding: 10,
  },
  btn: {
    height: 50,
    width: 370,
    backgroundColor: "red",
    borderRadius: 20,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  group1: {
    flexDirection: "row",
  },
  group2: {
    flexDirection: "row",
  },
  group3: {
    flexDirection: "row",
    marginLeft: 20,
  },
  group4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default Home;
