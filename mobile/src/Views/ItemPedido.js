import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';

const PedidoScreen = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [pedido, setPedido] = useState([]);

  const modules = [
    { title: 'Bebidas', items: ['Coca-Cola', 'Água', 'Suco'] },
    { title: 'Pizzas', items: ['Margherita', 'Pepperoni', 'Vegetariana'] },
    { title: 'Pratos', items: ['Frango Grelhado', 'Salmão', 'Massa Carbonara'] },
  ];

  const addItem = (item) => {
    const newPedido = [...pedido];
    const existingItemIndex = newPedido.findIndex((i) => i.item === item);

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

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
        Adicionar Pedido
      </Text>

      {modules.map((module, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedModule(module)}
          style={{
            padding: 10,
            backgroundColor: selectedModule === module ? 'lightgray' : 'white',
          }}
        >
          <Text style={{ fontSize: 18 }}>{module.title}</Text>
        </TouchableOpacity>
      ))}

      {selectedModule && (
        <View>
          <Text style={{ fontSize: 18, marginTop: 10 }}>{selectedModule.title}</Text>
          <FlatList
            data={selectedModule.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Button title="Adicionar" onPress={() => addItem(item)} />
                  <Button title="Remover" onPress={() => removeItem(item)} />
                </View>
              </View>
            )}
          />
        </View>
      )}

      <Text style={{ fontSize: 18, marginTop: 10 }}>Pedido Atual:</Text>
      {pedido.map((item, index) => (
        <Text key={index}>
          {item.item}: {item.quantidade}
        </Text>
      ))}
    </View>
  );
};

export default ItemPedido;