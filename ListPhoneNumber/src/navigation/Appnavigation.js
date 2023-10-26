import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/home";
import { Search } from "../screens/search";
import { List } from "../screens/list";

const Tab = createMaterialBottomTabNavigator();
export const Appnavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Home></Home>
          ),
          headerShown: false,
          tabBarLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Search></Search>
          ),
          headerShown: false,
          tabBarLabel: false,
        }}
      />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
