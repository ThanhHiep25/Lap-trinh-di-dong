import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
var url = "https://655611cd84b36e3a431ef19d.mockapi.io/user";
const Home = () => {
  const route = useRoute();
  const [state, setState] = useState([]);
  const user = route.params;

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
      <View>
        <Text style={styles.textn}></Text>
      </View>

      <FlatList
        data={state}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              var link = url + "/" + item.id;
              fetch(link, {
                method: "DELETE",
              });
              setState(...state);
            }}
          >
            <View style={styles.view2}>
              <Text style={styles.text}>Ten khach hang: {item.name}</Text>
              <Text style={styles.text}>HSD voucher: {item.date}</Text>
              <Text style={styles.text}>Thong tin khuyen mai: {item.khuyenmai}</Text>
              <Text style={styles.text}>Mo ta: {item.des}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  view2: {
    width: 380,
    height: "auto",
    padding: 20,
    backgroundColor: "#ebccaf",
    borderRadius: 20,
    marginTop: 60,
    shadowOffset: {
      height: 3,
      width: 4,
    },
    shadowRadius: 3,
  },
  textn: {
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: 500,
  },
  text: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: 500,
    marginTop: 10,
  },
});
