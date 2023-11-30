import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../src/constants/colors';
import Button from '../src/components/button';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import PropertyEntity from './components/PropertyEntity';

const Login = ({ navigation }) => {
    const [codigo, setCodigo] = useState(0);
    const [local, setLocal] = useState(0);

    const realizarLogin = async () => {
        var dados = {
            Codigo: codigo
        }
        await axios.post("http://localhost:3000/Usuarios/Login", dados).then((res) => {
            if (res.data.Status) {
                global.usuario = codigo;
                navigation.navigate("Pedido");
            }
            else {
                Toast.show({ type: "error", text1: "Falha", text2: res.data.Data })
            }
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Toast />
            <View style={{ flex: 1, marginHorizontal: 22, justifyContent: "center", marginBottom: "20rem" }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Olá!
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Digite um código de usuário</Text>
                </View>
                <PropertyEntity
                type="string"
                    label="Código:"
                    onChangeFunction={(e) => { setCodigo(e.target.value) }}
                />

                <PropertyEntity
                    type="select"
                    label="Local:"
                    onChangeFunction={(e, i) => { console.log(i);setLocal(i) }}
                    data={["Restaurante", "Boteco"]}
                    defaultValueByIndex={0}
                />

                <Button
                    title="Login"
                    onPress={realizarLogin}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Login