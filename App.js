import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas:[
        {key:1, nome: 'Strogonoff', valor: 35.90},
        {key:2, nome: 'Calabresa', valor: 60},
        {key:3, nome: 'Brigadeiro', valor: 37},
        {key:4, nome: 'portuguesa', valor: 25.70},
        {key:5, nome: 'quatro queijos', valor: 25.70},

      ]
    };
  };
  
  render() {
    let pizzasItem = this.state.pizzas.map( (v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })
    return (
      <View style={styles.conteiner}>
        <Text style={styles.logo}>Menu Pizzas</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIdex) => this.setState({ pizza: itemValue })}
        >
         {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>Você Escolhe: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    margin: 45
  },
  logo: {
    textAlign: 'center',
    fontSize: 29,
    fontWeight: 'bold'
  },
  pizzas: {
    margin: 15,
    fontSize: 23,
    textAlign: 'center'
  }
});