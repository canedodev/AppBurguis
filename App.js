import React, { useState } from 'react';
// import component NavigationContainer
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
// import Routes
import Routes from "./Routes";
import Login from "./src/Login";


export default function App() {

  const [logged, setLogged] = useState(false);
  
    if(logged){
      return <Routes />
    }
    return <Login setLogged={setLogged} />
}

// ONDE VAI O ARQUIVO DETALHES? VERIFICAR O GITHUB

/* 
 <NavigationContainer>
      <TelaHome />
 </NavigationContainer>
*/

  /*const [logged, setLogged] = useState(false);

  if(logged){
    return <Routes />
  }
  return <Login setLogged={setLogged} />*/