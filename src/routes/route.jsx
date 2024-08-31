import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import Home from "../screens/Home";
import AddProducer from "../screens/AddProducer";

const Stack = createNativeStackNavigator();

export default function Navigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="AddProducer"  component={AddProducer} options={{title: "Nouveau Producteur"}} />
        </Stack.Navigator>
    )
}