import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/home';
import { Modal } from '../screens/modal';

const Stack = createNativeStackNavigator();
export const Appnavigation = () => {
    return (
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Modal' component={Modal}/>
        </Stack.Navigator>
       </NavigationContainer>
    )
}

