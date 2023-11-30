import { View, Text, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/button';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import CardPedido from '../components/CardPedido';


const Pedido = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Toast />
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ flex: 1, backgroundColor: COLORS.primary, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.white,
                    }}>
                        Pedidos
                    </Text>
                </View>
                <View style={{ flex: 10}}>
                    
                </View>

                <Button title="Novo Pedido" filled style={styles.novoPedidoBtn} onPress={pressed}>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Pedido

const styles = StyleSheet.create({
    card: {
        marginVertical: 12,
        paddingHorizontal: 18,
        marginHorizontal: 22, flex: 1,
        backgroundColor: COLORS.grey,
        borderRadius: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    campo: {
        fontSize: 16,
        marginHorizontal: 4,
    },
    campos: {
        marginBottom: 10
    },
    botao: {
        marginBottom: 10,
        padding: 0
    },
    novoPedidoBtn: {
        backgroundColor: "#2e2694",
        position: "absolute",
        bottom: "50px",
        right: "100px",
        left: "100px"
    }
})
