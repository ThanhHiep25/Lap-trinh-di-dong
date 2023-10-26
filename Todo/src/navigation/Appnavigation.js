import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../screens/Welcome";
import { CheckScreen2 } from "../screens/CheckScreen2";

const Stack = createNativeStackNavigator();
export const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Check" component={CheckScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
<Stack.Screen name="Welcome" component={Welcome} />;
