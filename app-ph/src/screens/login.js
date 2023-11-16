import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

var url = "https://655611cd84b36e3a431ef19d.mockapi.io/user";

const Login = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [state, setState] = useState([]);
  const route = useRoute();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      });
  }, [state]);

  const headerCheck = () => {
    const user = state.find((user) => user.email == mail);

    if (user) {
      navigation.navigate("home", user);
    } else {
      alert("Chua dk tai khoan");
      setPass("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Login</Text>
      </View>

      <View style={styles.view1}>
        <TextInput
          style={styles.textIn}
          value={mail}
          onChangeText={(text) => {
            setMail(text);
          }}
          placeholder="Email"
        />
        <TextInput
          style={styles.textIn}
          value={pass}
          onChangeText={(text) => {
            setPass(text);
          }}
          placeholder="Password"
        />
      </View>

      <View style={styles.view2}>
        <Pressable onPress={()=>{navigation.navigate('dk')}}>
            <Text>Đăng ký</Text>
        </Pressable>
      </View>

      <View style={styles.view2}>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            headerCheck();
          }}
        >
          <Text style={styles.textPre}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  view: {
    alignItems: "center",
    marginTop: 60,
  },
  view1: {
    alignItems: "center",
  },
  view2: {
    margin: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: 700,
  },
  textIn: {
    height: 50,
    width: 330,
    backgroundColor: "#7e7979",
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
    color: "#fff",
    fontSize: 16,
  },
  Pre: {
    height: 50,
    width: 200,
    borderRadius: 30,
    backgroundColor: "#51a551",
    alignItems: "center",
    justifyContent: "center",
  },
  textPre: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
  },
});
