import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import Checkbox from "expo-checkbox";

const Header = () => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>PASSWORD</Text>
      <Text style={styles.tittle}>GENERATOR</Text>

      <TextInput style={styles.txtInP}></TextInput>

      <View style={styles.group1}>
        <Text style={styles.txtP}>Password length</Text>
        <TextInput style={styles.txtIP}></TextInput>
      </View>

      <View style={styles.group1}>
        <Text style={styles.txt1}>Include lower case letters</Text>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        ></Checkbox>
      </View>

      <View style={styles.group1}>
        <Text style={styles.txt1}>Include upcase letters</Text>
        <Checkbox
          style={styles.checkbox1}
          value={isChecked1}
          onValueChange={setChecked1}
        ></Checkbox>
      </View>

      <View style={styles.group1}>
        <Text style={styles.txt1}>Include number</Text>
        <Checkbox
          style={styles.checkbox2}
          value={isChecked2}
          onValueChange={setChecked2}
        ></Checkbox>
      </View>

      <View style={styles.group1}>
        <Text style={styles.txt1}>Include special symbol</Text>
        <Checkbox
          style={styles.checkbox3}
          value={isChecked3}
          onValueChange={setChecked3}
        ></Checkbox>
      </View>

      <View style={styles.vi}>
        <Pressable style={styles.btn}>
          <Text style={styles.txtbtn}>GENERATE PASSWORD</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tittle: {
    fontSize: 25,
    fontWeight: 700,
    color: "#ffffff",
  },
  txtInP: {
    height: 55,
    width: 297,
    backgroundColor: "#151537",
    marginTop: 33,
    padding: 20,
    fontSize: 18,
    color: "#ffff",
  },
  group1: {
    flexDirection: "row",
  },
  txtP: {
    fontSize: 20,
    marginTop: 53,
    color: "#ffff",
  },
  txtIP: {
    backgroundColor: "#ffff",
    height: 33,
    width: 118,
    marginTop: 53,
    marginLeft: 20,
    padding: 10,
  },
  txt1: {
    fontSize: 20,
    color: "#ffff",
    marginTop: 36,
  },
  checkbox: {
    marginTop: 38,
    height: 25,
    width: 25,
    marginLeft: 40,
  },
  checkbox1: {
    marginTop: 38,
    height: 25,
    width: 25,
    marginLeft: 70,
  },
  checkbox2: {
    marginTop: 38,
    height: 25,
    width: 25,
    marginLeft: 125,
  },
  checkbox3: {
    marginTop: 38,
    height: 25,
    width: 25,
    marginLeft: 65,
  },
  vi: {
    marginTop: 50,
  },

  btn: {
    backgroundColor: "#0D5DB6",
    height: 50,
    width: 330,
    padding: 15,
    borderRadius: 20,
  },
  txtbtn: {
    textAlign: "center",
    fontWeight: 700,
    color: "#ffff",
    fontSize: 18,
  },
});

export default Header;
