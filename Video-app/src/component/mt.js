import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Mt = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          9.203.038 lượt xem Đã công chiếu vào 27 thg 5, 2022
        </Text>
        <Text style={styles.text1}>#negav #mammamia #hurrykng</Text>
        <Text style={styles.text2}>
          Artist: HIEUTHUHAI, HURRYKNG, REX, Negav & MANBO
        </Text>
        <Text style={styles.text2}>Music Producer: Kewtiie</Text>
        <Text style={styles.text2}>Mixing: HIEUTHUHAI</Text>
        <Text style={styles.text2}>Mastering: Kewtiie</Text>
        <Text style={styles.text2}>
          Special Guest: TEDDY CHILLA, MINHLAI, ANH PHAN, WILLISTIC, TATUDA, DA
          CLAUS
        </Text>
      </View>
    </View>
  );
};

export default Mt;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop:0,
    width: 400,
    height: 200,
    padding: 10,
    backgroundColor: "#e4dada30",
    borderRadius: 20,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: "Arial",
    color: "#ffff",
    width: 400,
  },
  text1: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: "Arial",
    color: "#29cac2",
    width: 400,
  },
  text2: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: "Arial",
    color: "#ffff",
    width: 400,
  },
});
