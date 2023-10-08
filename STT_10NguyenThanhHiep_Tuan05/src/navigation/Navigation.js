import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import A from "./../screens/2_a";
import C from "./../screens/2_c";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="name" component={A} options={{ title: "2A" }} />
        <Stack.Screen name="checkbox" component={C} options={{ title: "2C" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
