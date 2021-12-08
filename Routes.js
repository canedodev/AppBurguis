import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//import { createNativeStackNavigator } from '@react-navigation/stack';

import Inicio from "./src/pages/Inicio";
import Promocao from "./src/pages/Promocao";
import About from "./src/pages/About";
import Perfil from "./src/pages/Perfil";
import Carrinho from "./src/pages/Carrrinho";

import { Entypo, AntDesign, FontAwesome, Feather  } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

// transiçao de telas entre a tela inicio
//const Stack = createNativeStackNavigator();

// styles tabBarOptions
export default function Routes() {
    return(
        <NavigationContainer>
        <Tab.Navigator
         screenOptions={{
             style: {
                 height: 55,
                 borderTopWidth: 0,
                 elevation: 0,
             },
             showLabel: false,
             tabBarActiveTintColor: '#EC602F',
             tabBarInactiveTintColor: 'black',
         }}
        >
            <Tab.Screen 
            name="Inicio" 
            component={Inicio} 
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Entypo name="home" size={24} color="#fe784a" />
                )
            }}
            />

            <Tab.Screen 
            name="Promoção" 
            component={Promocao}
            options={{
                tabBarIcon: ({ size, color}) => (
                    <AntDesign name="tags" size={24} color="#fe784a" />
                )
            }}
            />

            <Tab.Screen 
            name="Perfil" 
            component={Perfil} 
            options={{
                tabBarIcon: ({ size, color}) => (
                    <FontAwesome name="user" size={24} color="#fe784a" />
                    )
                }}
            />
            <Tab.Screen 
            name="Sobre nós" 
            component={About} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="info" size={24} color="#fe784a" />
                    )
                }}
            />

            <Tab.Screen 
            name="Carrinho" 
            component={Carrinho} 
            options={{
                tabBarIcon: ({ size, color}) => (
                    <Feather name="shopping-cart" size={24} color="#fe784a" />
                )
            }}
            />

        </Tab.Navigator>
        </NavigationContainer>
    )
}
// #b2b5b9 color icons