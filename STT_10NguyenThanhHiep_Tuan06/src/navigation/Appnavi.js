import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Set from "../screens/SetPhone";

const Stack = createNativeStackNavigator();
const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Set" component={Set} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigation;
