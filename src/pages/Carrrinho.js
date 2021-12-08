import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import foods from '../consts/foods';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {PrimaryButton} from '../components/Button';
/*
<PrimaryButton title="FINALIZAR" />
*/

export default function Carrinho() {
    
    const CarCarrinho = ({item}) => {
        return <View style={styles.cartCarrinho}>
            <Image source={item.image} style={{height: 80, width: 80}} />
            <View style={styles.viewImgCar}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color:'#908e8c'}}>${item.price}</Text>
            </View>
            <View style={styles.numItemContainer}>
                <Text style={styles.textNumContainer}>3</Text>
                <View style={styles.acaoBtnCar}>
                    <Icon name="remove" size={25} color={'#FFFFFF'}/>
                    <Icon name="add" size={25} color={'#FFFFFF'}/>
                </View>
            </View>
        </View>
    }

    return (
        <SafeAreaView style={styles.carrinhoContainer}>
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} />
                <Text style={styles.textCarrinho}>Carrinho</Text>
            </View>
            <FlatList 
             showsVerticalScrollIndicator={false}
             contentContainerStyle={{paddingBottom: 80}}
             data={foods}
             renderItem={({item}) => <CarCarrinho item={item} />}
             ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
             ListFooterComponent={() => (
             <View>
                 <View 
                 style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     marginVertical: 15,
                 }}>
                     <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                         Preço Total
                     </Text>
                     <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                         $50
                     </Text>
                 </View>
                     <View style={{marginHorizontal: 30}}>
                     <PrimaryButton title="FINALIZAR" />
                     </View>
                 
             </View>
             )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    carrinhoContainer:{
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    textCarrinho:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    cartCarrinho:{
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewImgCar:{
        flex: 1,
        height: 100,
        marginLeft: 10,
        paddingVertical: 20,
    },
    numItemContainer:{
        marginRight: 20,
        alignItems: 'center',
    },
    textNumContainer:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    acaoBtnCar:{
        width: 80,
        height: 30,
        backgroundColor: '#e8630a',
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
});