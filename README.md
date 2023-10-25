# Lap-trinh-di-dong
![image](https://github.com/ThanhHiep25/Lap-trinh-di-dong/assets/87129597/e3b2ff90-f015-496a-9285-303d8af96ffd)   
Đang update ...
![Signature_of_Son_Tung_MTP svg](https://github.com/ThanhHiep25/Lap-trinh-di-dong/assets/87129597/ee0526d3-42e5-45b6-80e0-4b1832a40801)

# Navigation:
npm install @react-navigation/native
import { NavigationContainer } from "@react-navigation/native";


# Stack-Navigation:
npm install @react-navigation/native-stack
or
npm install @react-navigation/stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";


# Drawer

npm install @react-navigation/drawer
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}


# Bottom Tabs
npm install @react-navigation/bottom-tabs

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


# Material Top Tabs Navigator

npm install @react-navigation/material-top-tabs react-native-tab-view
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}