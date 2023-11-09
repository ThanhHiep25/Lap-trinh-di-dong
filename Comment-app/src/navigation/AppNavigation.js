import React from "react";
import { StyleSheet , View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/login";
const Stack = createNativeStackNavigator()
export const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{title:'Login Page (0 v 0)'}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
