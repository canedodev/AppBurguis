import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
// Import FlatList
import { FlatList, ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';

// Import Referencias
import Icon from 'react-native-vector-icons/MaterialIcons';
import categorias from '../consts/categorias';
import foods from '../consts/foods';

const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 20;

export default function Inicio({navigation}) {
    
    // arquivo Categorias
    const [selecaoCategoria, setSelecaoCategoria] = React.useState(0); // React.useState(); ??
    
//////////////////////////// CATEGORIAS ////////////////////////////
    const ListaCategoria =() =>{
        return (
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ListaCategoriaContainer}>
            {categorias.map((categorias, index)=>(
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=>setSelecaoCategoria(index)}>
                    <View 
                    style={{
                        backgroundColor:
                        selecaoCategoria == index 
                        ? '#fe784a'
                        : '#fedac5',
                        ...styles.categoriaBtn,
                    }}>
                        <View style={styles.categoriasImg}>
                        <Image
                        source={categorias.image}
                        style={{height: 35, width: 35, resizeMode: 'cover'}}
                        />
                        </View>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            color:
                            selecaoCategoria == index
                              ? '#FFFFFF'
                              : '#fe784a',
                        }}>
                          {categorias.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
        );
    };

    // const FlatList
    const Card = ({food}) => {
        return(
        <TouchableHighlight
        underlayColor={'#FFFFFF'}
        activeOpacity={0.9}
        
        >
         <View style={styles.flatCreate}>
            <View style={styles.imageFood}>
            <Image
             source={food.image}
             style={{height: 120, width: 120}} 
            />
            </View>
            <View style={{marginHorizontal: 20}}>
                <Text style={styles.textBurger}>{food.name}</Text>
            </View>
            <View style={{
                marginTop: 10,
                marginHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color:'#908e8c'}}>${food.price}</Text>
                <View style={styles.addParaCarinhoBtn}>
                    <Icon name="add" size={20} color='#FFFFFF' />
                </View>
            </View>
            </View>
        </TouchableHighlight>
        );
    };

    // denominando 2 itens por coluna/linha
    return (
        <SafeAreaView style={styles.safeHome}>
            <View style={styles.header}>
                <View>
                    <View style={styles.headerSec}>
                        <Text style={styles.textInicial}>Olá,</Text>
                        <Text style={styles.textSecundario}>Rafael</Text>
                    </View>
                    <Text style={styles.textTerceiro}>O que você gostaria para hoje?</Text>
                </View>
            </View>
            <View style={styles.testBar}>
            <View style={styles.inputContainer}>
                <Icon name="search" size={28} />
                <TextInput style={{flex: 1, fontSize: 18}}
                           placeholder="Procure seu Lanche"
                />
            </View>
            <View style={styles.filtroSearch}>
                <Icon name="tune" size={28} color={'#FFFFFF'} />
            </View>
            </View>
            <View>
            <ListaCategoria />
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={foods}
            renderItem={({item}) => <Card food={item} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   safeHome:{
       flex: 1,
       backgroundColor: '#FFFFFF',
   },
   header:{
       marginTop: 20,
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingHorizontal: 20,
   },
   headerSec:{
    flexDirection: 'row',
   },
   textInicial:{
    fontSize: 28,
   },
   textSecundario:{
       fontSize: 28,
       fontWeight: 'bold',
       marginLeft: 10,
   },
   textTerceiro:{
       marginTop: 5,
       fontSize: 22,
       color: '#b2b5b9',
   },
   testBar:{
       marginTop: 40,
       flexDirection: 'row',
       paddingHorizontal: 20,
   },
   inputContainer:{
       //flex: 1,
       width: 300,
       height: 50,
       borderRadius: 30,
       flexDirection: 'row',
       backgroundColor: '#c9cacf',
       alignItems: 'center',
       paddingHorizontal: 20,
   },
   filtroSearch:{
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#e8630a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
   },
   ListaCategoriaContainer:{
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
   },
   categoriaBtn:{
       height: 45,
       width: 110,
       marginRight: 7,
       borderRadius: 30,
       alignItems: 'center',
       paddingHorizontal: 5,
       flexDirection: 'row',
   },
   categoriasImg:{
       height: 35,
       width: 35,
       backgroundColor: '#FFFFFF',
       alignItems: 'center',
       borderRadius: 30,
       alignItems: 'center',
   },
   // styles backflat
   flatCreate:{
       height: 220,
       width: cardWidth,
       marginHorizontal: 10,
       marginBottom: 20,
       marginTop: 50,
       elevation: 13,
       borderRadius: 15,
       backgroundColor: '#FFFFFF',
   },
   imageFood:{
       alignItems: 'center', 
       top: -40,
   },
   textBurger:{
       fontSize: 18,
       fontWeight: 'bold',
   },
   /*textPreco:{
       marginTop: 10,
       flexDirection: 'row',
       marginHorizontal: 120,
       justifyContent: 'space-between',
   }, */
   /*precoStyle:{
       fontSize: 18,
       fontWeight: 'bold',
       color: '#908e8c',
   } */
   addParaCarinhoBtn:{
       height: 30,
       width: 30,
       borderRadius: 20,
       backgroundColor: '#e8630a',
       justifyContent: 'center',
       alignItems: 'center',
   },
});

/* 
onPress={() => navigation.navigate('Detalhes', food)}
*/