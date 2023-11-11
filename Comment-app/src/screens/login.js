import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
var url = "https://654460405a0b4b04436c4cda.mockapi.io/user";
export const Login = () => {
  const [state, setState] = useState([]);
  const [name, setName] = useState();
  const [pas, setPas] = useState();
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        setState(data);
      });
  }, []);

  const hanldCheck = () => {
    const user = state.find((user) => user.email == name && user.pass == pas);
    if (user) {
      navigation.navigate("home", user);
      setPas("");
    } else {
      alert("tai khoan chua dang ky");
      setPas("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewup}>
        <Pressable
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
          <Image
            source={require("../../assets/IMG/sign-up.png")}
            style={styles.imgup}
          />
        </Pressable>
      </View>

      <View style={styles.view}>
        <Image
          source={require("../../assets/IMG/imgLogin.png")}
          style={styles.img}
        />
      </View>

      <View style={styles.view1}>
        <Text style={styles.text}>Login</Text>
      </View>

      <View style={styles.view2}>
        <TextInput
          style={styles.textIn}
          placeholder="Email or User name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.textIn}
          placeholder="Password"
          value={pas}
          onChangeText={(text) => setPas(text)}
        />
      </View>

      <View style={styles.view3}>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            hanldCheck();
          }}
        >
          <Text style={styles.text1}>Submit</Text>
          <Image
            source={require("../../assets/IMG/sub.png")}
            style={styles.img1}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D39DEDB8",
  },
  view: {
    alignItems: "center",
    margin: 20,
    marginTop: 80,
  },
  view1: {
    alignItems: "center",
    margin: 20,
  },
  view2: {
    alignItems: "center",
    margin: 20,
  },
  view3: {
    alignItems: "center",
    margin: 20,
    marginTop: 50,
  },
  viewup: {
    margin: 20,
    alignItems: "flex-end",
  },
  img: {
    height: 180,
    width: 180,
    resizeMode: "contain",
  },
  img1: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  imgup: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  text: {
    fontSize: 40,
    fontWeight: 700,
    color: "#ffff",
    fontFamily: "Arial",
  },
  text1: {
    fontSize: 20,
    fontWeight: 700,
    color: "#ffff",
    fontFamily: "Arial",
  },
  textIn: {
    fontSize: 20,
    fontWeight: 500,
    color: "#ffff",
    fontFamily: "Arial",
    height: 50,
    width: 330,
    marginTop: 20,
    backgroundColor: "#D9D9D978",
    color: "#E9A0A0",
    padding: 10,
    paddingLeft: 50,
    borderRadius: 10,
    borderColor: "#fff",
    borderBottomWidth: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  Pre: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    width: 250,
    backgroundColor: "#61BDF1",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
