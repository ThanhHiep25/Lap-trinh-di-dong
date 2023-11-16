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

const DK = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [des, setDes] = useState();
  const [km, setKm] = useState();
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
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('login')}>
        <Text>Về</Text>
      </Pressable>

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
        <TextInput
          style={styles.textIn}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder="Name"
        />
        <TextInput
          style={styles.textIn}
          value={des}
          onChangeText={(text) => {
            setDes(text);
          }}
          placeholder="Des"
        />
        <TextInput
          style={styles.textIn}
          value={date}
          onChangeText={(text) => {
            setDate(text);
          }}
          placeholder="Date"
        />
        <TextInput
          style={styles.textIn}
          value={km}
          onChangeText={(text) => {
            setKm(text);
          }}
          placeholder="Khuyen Mai"
        />
      </View>

      <View style={styles.view2}>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            fetch(url, {
              method: "POST",
              body: JSON.stringify({
                name: name,
                date: date,
                khuyenmai: km,
                des: des,
                email: mail,
                pass: pass,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            setDate("");
            setDes("");
            setKm("");
            setMail("");
            setName("");
            setPass("");
          }}
        >
          <Text style={styles.textPre}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DK;

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
