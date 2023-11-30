import { View, Text, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/button';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import CardPedido from '../components/CardPedido';
import PropertyEntity from '../components/PropertyEntity';


const Pedido = ({ navigation }) => {
    const [mesa, setMesa] = useState("");

    const pressed = () => {
        navigation.navigate("CriarPedido");
    }
    const pedidos = [
        {
            id_pedido: 0,
            situacao: { text: "Situação", value: "", id: 1 },
            situacao2: { text: "Itens", value: "1, 2, 3", id: 2 },
        },
        {
            id_pedido: 0,
            situacao: { text: "Situação", value: "", id: 2 },
            situacao2: { text: "Itens", value: "1, 2, 3", id: 2 },
        },
        {
            id_pedido: 0,
            situacao: { text: "Situação", value: "", id: 3 },
            situacao2: { text: "Itens", value: "1, 2, 3", id: 2 },
        },
        {
            id_pedido: 0,
            situacao: { text: "Situação", value: "", id: 4 },
            situacao2: { text: "Itens", value: "1, 2, 3", id: 2 },
        },
    ]
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
                <View style={{ flex: 8, marginHorizontal: 22 }}>
                    <PropertyEntity 
                        type="string"
                        label="Número Mesa:"
                        onChangeFunction={(e) => {setMesa(e.target.value)}}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Button
                        title="Cancelar"
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                    />
                    <Button
                        title="Gerar Pedido"
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                    />
                </View>
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
