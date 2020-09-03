import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={}
        onChangeText={} //serve para que cada vez que digitar uma tecla, ele vai salvar em uma 
        placeholder="Peso (kg)"

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4',
  },

  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
  },

  input: {
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 15,
    color: '#fff',
    fontSize: 23,
  }
});
