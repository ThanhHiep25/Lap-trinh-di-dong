import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import dataCake from "../../data";
import { useNavigation, useRoute } from "@react-navigation/native";

const Cake = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [color, SetColor] = useState(1);


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome, Jala!</Text>
        <Text style={styles.text1}>Choice you Best food</Text>
      </View>

      <View style={styles.view}>
        <TextInput style={styles.textIn} placeholder="Search Food"></TextInput>
        <Image
          source={require("../../assets/IMG/Group.png")}
          style={styles.img}
        ></Image>
      </View>

      <View style={styles.view1}>
        <Pressable style={styles.Pre}>
          <Text style={styles.text2}>Donut</Text>
        </Pressable>
        <Pressable style={styles.Pre}>
          <Text style={styles.text2}>Pink Donut</Text>
        </Pressable>
        <Pressable style={styles.Pre}>
          <Text style={styles.text2}>Floating</Text>
        </Pressable>
      </View>

      <View style={styles.view2}>
        <FlatList
          data={dataCake}
          renderItem={({ item }) => (
            <Pressable
              style={styles.Precake}
              onPress={() => {
                navigation.navigate('CakePopup', item);
              }}
            >
              <View style={styles.view3}>
                <Image source={item.img} style={styles.img1}></Image>

                <View style={styles.view4}>
                  <Text style={styles.text3}>{item.name}</Text>
                  <Text style={styles.text4}>{item.shop}</Text>
                  <Text style={styles.text3}>{item.price}</Text>
                </View>
                <Image
                  source={require("../../assets/IMG/plus_button.png")}
                  style={styles.img2}
                ></Image>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  view: {
    flexDirection: "row",
    marginTop: 40,
  },
  view1: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-around",
  },
  view2: {
    marginTop: 40,
    alignItems: "center",
    marginBottom: 50,
  },
  view3: {
    flexDirection: "row",
  },
  view4: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  text1: {
    fontSize: 20,
    fontWeight: 700,
  },
  text3: {
    fontSize: 20,
    fontWeight: 700,
  },
  text4: {
    fontSize: 15,
    fontWeight: 700,
    color: "#0000008A",
  },
  textIn: {
    height: 46,
    width: 266,
    backgroundColor: "#C4C4C41A",
    color: "#C4C4C4",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  img: {
    height: 46,
    width: 46,
    borderRadius: 10,
    marginLeft: 30,
  },
  img1: {
    height: 101,
    width: 111,
    borderRadius: 10,
    resizeMode: "contain",
  },
  img2: {
    height: 45,
    width: 45,
    borderRadius: 10,
    resizeMode: "contain",
    position: "absolute",
    left: 270,
    top: 62,
  },
  Pre: {
    width: 101,
    height: 35,
    backgroundColor: "#C4C4C41A",
    padding: 4,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 10,
  },
  Precake: {
    height: 115,
    width: 337,
    borderRadius: 10,
    backgroundColor: "#F4DDDD",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
});

export default Cake;
