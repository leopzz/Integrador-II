import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import PropertyEntity from '../components/PropertyEntity';

const CriarPedido = () => {
    const [selectedModule, setSelectedModule] = useState(null);
    const [pedido, setPedido] = useState([]);
    const [mesa, setMesa] = useState([]);

    const modules = [
        { title: 'Bebidas', items: ['Coca-Cola', 'Água', 'Suco'] },
        { title: 'Pizzas', items: ['Margherita', 'Pepperoni', 'Vegetariana'] },
        { title: 'Pratos', items: ['Frango Grelhado', 'Salmão', 'Massa Carbonara'] },
        { title: 'Massas', items: ['Spaghetti', 'Lasanha', 'Fettuccine Alfredo'] },
    ];

    const addItem = (item) => {
        const newPedido = [...pedido];
        const existingItemIndex = newPedido.findIndex((i) => i.item === item);

        // const realizarRequisicao = async () => {
        //     try {
        //         const resposta = await fetch('http://localhost:3000/Pedidos/ObterModulos');
        //         const dadosJson = await resposta.json();
        //         setDados(dadosJson);
        //     } catch (erro) {
        //         console.error('Erro na requisição:', erro);
        //     }
        // };
        // realizarRequisicao();
        if (existingItemIndex !== -1) {
            newPedido[existingItemIndex].quantidade += 1;
        } else {
            newPedido.push({ item, quantidade: 1 });
        }

        setPedido(newPedido);
    };

    const removeItem = (item) => {
        const newPedido = pedido.filter((i) => i.item !== item);
        setPedido(newPedido);
    };

    const cancelarPedido = () => {
        navigation.navigate("Pedido");
    };

    const criarPedido = async () => {
        if (pedido.length == 0) {
            Toast.show({ type: "error", text1: "Falha", text2: "Não pode ser criado um pedido vazio" })
        }
        else {
            var dados = {
                usuario: "JEFERSON",
                pedido: pedido,
                mesa: mesa
            }
            console.log(dados)
            await axios.post("http://localhost:3000/Pedidos/GerarPedido", dados).then((res) => {
                navigation.navigate("Pedido");
                if (res.data.Status){
                    navigation.navigate("Pedido");
                }
                else {
                    Toast.show({ type: "error", text1: "Falha", text2: "Ocorreu um erro ao gerar o pedido" })

                }
            })
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#f8f8ff' }}>
            <Toast />


            <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20, color: '#4169e1' }}>
                Adicionar Pedido
            </Text>
            <PropertyEntity 
                type="string"
                onChangeFunction={(e) => {setMesa(e.target.value)}}
                label="Mesa"
            />

            {modules.map((module, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedModule(module)}
                    style={{
                        padding: 10,
                        backgroundColor: '#87ceeb',
                        marginBottom: 10,
                        borderRadius: 8,
                    }}
                >
                    <Text style={{ fontSize: 18, color: 'black' }}>{module.title}</Text>
                </TouchableOpacity>
            ))}

            {selectedModule && (
                <View>
                    <Text style={{ fontSize: 18, marginTop: 10, color: '#4169e1' }}>
                        {selectedModule.title}
                    </Text>
                    <FlatList
                        data={selectedModule.items}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <Text style={{ color: 'black' }}>{item}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Button title="Adicionar" onPress={() => addItem(item)} color="green" />
                                    <Button title="Remover" onPress={() => removeItem(item)} color="red" />
                                </View>
                            </View>
                        )}
                    />
                </View>
            )}

            <Text style={{ fontSize: 18, marginTop: 20, color: '#4169e1' }}>Pedido Atual:</Text>
            {pedido.map((item, index) => (
                <Text key={index}>
                    {item.item}: {item.quantidade}
                </Text>
            ))}

            {/* Botões na parte inferior */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'white',
                        padding: 15,
                        borderRadius: 8,
                        borderColor: '#4169e1',
                        borderWidth: 2,
                        width: '45%',
                    }}
                    onPress={() => cancelarPedido()}
                >
                    <Text style={{ color: '#4169e1', textAlign: 'center', fontSize: 16 }}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#4169e1',
                        padding: 15,
                        borderRadius: 8,
                        width: '45%',
                    }}
                    onPress={() => criarPedido()}
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Criar Pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CriarPedido;
