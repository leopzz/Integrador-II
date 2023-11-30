import COLORS from '../constants/colors';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button from './button';
import { ProgressBar } from 'react-native-paper';

export default function CardPedido(props) {
    const pedido = props.pedido;
    const textBotao = () => {
        console.log(111)
        if (pedido.situacao.id == 1)
            return "Entregar";
        if (pedido.situacao.id == 2)
            return "Finalizar";
        if (pedido.situacao.id == 4)
            return "Cancelado";
        else return "Finalizado";
    };
    const corAtual = () => {
        if (pedido.situacao.id == 1)
            return COLORS.etapa1;
        if (pedido.situacao.id == 2)
            return COLORS.etapa2;
        if (pedido.situacao.id == 3)
            return COLORS.finalizado;
        return COLORS.cancelado;
    }
    const proximaCor = () => {
        if (pedido.situacao.id == 1)
            return COLORS.etapa2;
        if (pedido.situacao.id == 2)
            return COLORS.finalizado;
        if (pedido.situacao.id == 3)
            return COLORS.white;
        else COLORS.cancelado;
    }

    const avancarEtapa = () => {
    }
    
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Pedido: {pedido.id_pedido}</Text>
            <View style={styles.campos}>
                {Object.keys(pedido).map((property) => {
                    if (property == "id_pedido")
                        return;
                    return (
                        <Text style={styles.campo}>{pedido[property]["text"]}: {pedido[property]["value"]}</Text>


                    )
                })}
            </View>
            <Button
                style={styles.botao}
                collor={proximaCor()}
                title={textBotao()}
                onPress={avancarEtapa}
            />
            <ProgressBar progress={pedido.situacao.id / 3} color={corAtual()} style={{ marginBottom: 2 }} />
        </View>
    )
}

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
    progressBar: {

    }
})
