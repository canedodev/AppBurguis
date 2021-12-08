import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Facebook from 'expo-facebook';

export default function Buttom () {
    async function LogIn() {
        try {
          await Facebook.initializeAsync({
            appId: '2831099907180753',// APP ID
          });
          const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
    return(
        <TouchableOpacity style={styles.facebookContainer} onPress={LogIn}>
        <FontAwesome5 name="facebook" size={25} color="#399fff"/>
          <Text style={styles.facebookText}>Entrar com Facebook</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  facebookContainer:{
    //backgroundColor: '#399ff',
    flex: 1,
    width: '100%',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
    marginBottom: 100,
  },
  facebookText:{
    color: '#399fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
/*
facebookContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '15%',
        justifyContent: 'center',
        marginBottom: 100
    },
    facebookText: {
        color: '#399fff',
        paddingLeft: 8,
        fontSize: 15
    },
*/