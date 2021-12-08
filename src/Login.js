import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttom from '../src/components/Buttom';

// BOTAO ESTÁ EM UM ARQUIVO DIFERENTE DESSE !!

export default function Login () {
    return (
      
      <SafeAreaView style={styles.areaTela}>
            <View style={styles.telaHome}>
                <Image style={styles.imageHome} source={require('../assets/logo/LogoBurguis.png')} />
            </View>
            <View style={styles.textContainer}>
            <View>
                <Text style={styles.textHome}>Burguis</Text>
                <Text style={styles.textSlogan}>A felicidade em formato de Hamburger</Text>
            </View>
            </View>
            <View style={styles.divisor}>
            </View>
            <Buttom />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    areaTela: {
      flex: 1,
      backgroundColor: '#FFF',// #EC602F laranja // imagem embaçada
  },
  telaHome: {
      height: 400,
  },
  imageHome: {
      width: '100%', // center image
      resizeMode: 'contain',
      height: 200,
  },
  textHome: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  // bug de att palavra hamburger
  textSlogan: {
      margin: 20,
      fontSize: 18,
      textAlign: 'center',
      color: '#b2b5b9', // cinza claro ou escuro?
  },
  // centralizamos o Slogan e o Burguis
  textContainer: {
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 50,
      paddingBottom: 40,
  },
  divisor: {
      marginTop: '10%',
      flexDirection: 'row',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center'
  },
});