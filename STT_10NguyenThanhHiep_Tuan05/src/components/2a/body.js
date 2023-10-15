import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const Body = () => {
  var [name, setName] = useState("");
  var [pass, setPass] = useState("");
  var [isVisible, setIsVisible] = useState(false);
  var data = [
    { name: "abc", pass: "12345678" },
    { name: "akaka", pass: "211011" },
  ];

  const handleLogin = () => {
    const user = data.find((user) => user.name == name && user.pass == pass);
    if (user) {
      alert("Login thành công!");
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <Image
          source={require("./../../../assets/IMG/avatar_user.png")}
          style={styles.imgAvatar}
        ></Image>

        <TextInput
          style={styles.textInname}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
        ></TextInput>
      </View>
      <View style={styles.group1}>
        <Image
          source={require("./../../../assets/IMG/lock.png")}
          style={styles.imgLock}
        ></Image>

        <TextInput
          style={[
            styles.textInP,
            isVisible && {
              secureTextEntry: true,
            },
          ]}
          value={pass}
          onChangeText={(text) => setPass(text)}
          placeholder="Password"
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity>
          <Image
            source={require("./../../../assets/IMG/eye.png")}
            style={styles.imgEye}
            onPress={() => setIsVisible(!isVisible)}
          ></Image>
        </TouchableOpacity>
      </View>
      <Pressable style={styles.btn} onPress={handleLogin}>
        <Text style={styles.txtLogin}>LOGIN</Text>
      </Pressable>
      <Text style={styles.textF}>Forgot your password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  group1: {
    flexDirection: "row",
  },
  imgAvatar: {
    width: 32,
    height: 32,
    position: "absolute",
    marginTop: 10,
    marginLeft: 10,
  },
  imgLock: {
    width: 32,
    height: 32,
    position: "absolute",
    marginLeft: 10,
    marginTop: 30,
  },
  imgEye: {
    width: 32,
    height: 32,
    position: "absolute",
    left: -40,
    marginTop: 30,
  },
  textInname: {
    fontSize: 18,
    backgroundColor: "#C4C4C44D",
    height: 54,
    width: 330,
    padding: 10,
    borderColor: "#f2f2f2",
    borderWidth: 1,
    paddingLeft: 50,
  },
  textInP: {
    fontSize: 18,
    backgroundColor: "#C4C4C44D",
    height: 54,
    width: 330,
    padding: 10,
    borderColor: "#f2f2f2",
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 50,
  },
  btn: {
    height: 54,
    width: 330,
    backgroundColor: "#060000",
    margin: 40,
  },
  txtLogin: {
    color: "#fff",
    textAlign: "center",
    padding: 15,
    fontSize: 20,
    fontWeight: 400,
  },
  textF: {
    fontSize: 20,
    fontWeight: 700,
  },
});

export default Body;
