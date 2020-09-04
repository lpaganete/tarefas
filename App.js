import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(''); // quero que meu cimput comece com uma string vazia 
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc <= 18.6) {
      alert("Você está abaixo do peso! " + imc.toFixed(2)); //toFixed limita o número de casas dps da vírgula
    }
    else if (imc > 18.6 && imc <= 24.9) {
      alert("Parabéns! Você está no peso ideal! " + imc.toFixed(2));
    }
    else if (imc > 24.9 && imc <= 34.9) {
      alert("Você está levemente acima do peso! " + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)} //Usa estado (useState) cada vez que digitar uma tecla, ele vai salvar na variavel "peso". 
        placeholder="Peso (kg)"
        keyboardType="numeric" //define o tipo de reclado
      />
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric" //define o tipo de reclado
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit} //Quando clicar no botão vai chamar alguma coisa (uma função)
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
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
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#41aef4',
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
});
