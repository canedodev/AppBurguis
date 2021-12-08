/*import React from 'react';
import {Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../components/Login';

export default function TelaHome({navigation}) {
    return (
        <SafeAreaView style={styles.areaTela}>
            <View style={styles.telaHome}>
                <Image style={styles.imageHome} source={require('../../assets/logo/LogoBurguis.png')} />
            </View>
            <View style={styles.textContainer}>
            <View>
                <Text style={styles.textHome}>Burguis</Text>
                <Text style={styles.textSlogan}>A felicidade em formato de Hamburger</Text>
            </View>
            </View>

            <View style={styles.divisor}>
               {/*} <View style={styles.divisorLinha}></View>
                <Text style={{marginHorizontal: '3%'}}> ou </Text>
    <View style={styles.divisorLinha}></View> *//*}
            </View>
            <Login />
        </SafeAreaView>
    )
}

// DESCER A IMAGEM PARA FICAR AO CENTRO
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
    // centrsalizar o OU e a Divisão
    /*divisorLinha: {
        width:'50%',
        height: 1,
        backgroundColor: '#7a7c81',
        //color: '#7a7c81',
        borderRadius: 5,
    },*/
    //textTest: {
        //marginHorizontal: '3%',
      //  flexDirection: 'column',
        //alignItems: 'center'
        //} 
// });