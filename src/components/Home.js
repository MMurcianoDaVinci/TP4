import React from "react";
import { Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"; 
import Listado from "./Listado";
import Detalle from "./Detalle";
import LoginGoogle from "./Login";

const Stack = createStackNavigator();

const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Listado" component={Listado}></Stack.Screen>
            <Stack.Screen name="Detalle" component={Detalle}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginGoogle}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Home;