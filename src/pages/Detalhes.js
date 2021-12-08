import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

export default function Detalhes() {
    return (
        <SafeAreaView style={styles.areaDetails}>
            <View style={styles.header}></View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    areaDetails:{
        backgroundColor: '#FFFFFF',
    },
});