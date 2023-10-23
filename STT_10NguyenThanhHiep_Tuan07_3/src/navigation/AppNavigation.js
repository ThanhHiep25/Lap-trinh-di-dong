import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cake from '../screens/cake';

const Stack = createNativeStackNavigator();
const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Cake' component={Cake}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;