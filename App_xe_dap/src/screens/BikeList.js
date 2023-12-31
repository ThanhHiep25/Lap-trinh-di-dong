import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import bikeData from "../../dataBike";
import { Pressable } from "react-native";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

export const BikeList = ({ navigation }) => {
  const route = useRoute();
  const [color, setColor] = useState(1);
  const [bike, setBike] = useState(bikeData);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>The world's Best Bike</Text>
      </View>

      <View style={styles.view1}>
        <Pressable
          style={[
            styles.Pre,
            color == 1 ? { backgroundColor: "#E941411A" } : null,
          ]}
          onPress={() => {
            setBike(bikeData);
            setColor(1);
          }}
        >
          <Text style={styles.text1}>All</Text>
        </Pressable>
        <Pressable
          style={[
            styles.Pre,
            color == 2 ? { backgroundColor: "#E941411A" } : null,
          ]}
          onPress={() => {
            const newdata = bikeData.filter((item) => {
              return item.des == "bikeR";
            });
            setBike(newdata);
            setColor(2);
          }}
        >
          <Text style={styles.text1}>Roadbike</Text>
        </Pressable>
        <Pressable
          style={[
            styles.Pre,
            color == 3 ? { backgroundColor: "#E941411A" } : null,
          ]}
          onPress={() => {
            const newdata = bikeData.filter((item) => {
              return item.des == "bikemountain";
            });
            setBike(newdata);
            setColor(3);
          }}
        >
          <Text style={styles.text1}>Mountain</Text>
        </Pressable>
      </View>

      <View style={styles.view2}>
        <FlatList
          data={bike}
          numColumns={2}
          renderItem={({ item }) => (
            <Pressable
              style={styles.Pre1}
              onPress={() => {
                navigation.navigate("Pay", item);
              }}
            >
              <Image
                source={require("../../assets/IMG/icons_heart.png")}
                style={styles.img}
              />
              <Image source={item.img} style={styles.img1} />
              <Text style={styles.text2}>{item.name}</Text>
              <Text style={styles.text3}>{item.price}</Text>
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
    flex: 1,
    margin: 20,
  },
  view: {},
  view1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  view2: {
    marginTop: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: 700,
    color: "#E94141",
  },
  Pre: {
    borderWidth: 1,
    width: 99,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#E9414187",
  },
  Pre1: {
    margin: 10,
    height: 250,
    width: 175,
    backgroundColor: "#F7BA8326",
    padding: 10,
    borderRadius: 20,
  },
  text1: {
    fontSize: 18,
    fontWeight: 700,
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 5,
    fontWeight: 700,
    color: "#00000099",
  },
  text3: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 5,
    fontWeight: 700,
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  img1: {
    height: 127,
    width: 135,
    resizeMode: "contain",
  },
});
