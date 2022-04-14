import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from './Screens/Home';
import ClothingDetail from './Screens/ClothingDetail';

export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='ClothingDetail' component={ClothingDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}