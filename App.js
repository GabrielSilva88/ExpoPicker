import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0
    };
  };
  
  render() {
    return (
      <View style={styles.conteiner}>
        <Text style={styles.logo}>Menu Pizzas</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIdex) => this.setState({ pizza: itemValue })}
        >
          <Picker.Item key={1} value={1} label="Calabresa" />
          <Picker.Item key={2} value={2} label="Brigadeiro" />
          <Picker.Item key={3} value={3} label="Strogonoff" />
        </Picker>

        <Text style={styles.pizzas}>Você Escolhe: Pizza Calabresa</Text>
        <Text style={styles.pizzas}>R$ 59,00</Text>
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