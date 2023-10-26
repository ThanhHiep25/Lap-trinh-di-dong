import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
export const Appnavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name=''/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
