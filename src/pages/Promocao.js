import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Promocao() {
    return (
        <View style={styles.container}>
            <Text style={styles.textPage}>Combos Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPage:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});