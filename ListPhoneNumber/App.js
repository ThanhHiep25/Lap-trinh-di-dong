import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Appnavigation } from "./src/navigation/Appnavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from "./src/screens/welcome";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Well" component={Welcome}/>
        <Stack.Screen name="Appnavi" component={Appnavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 