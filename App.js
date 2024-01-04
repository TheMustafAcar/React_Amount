import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [sayi, setSayi] = useState(0);
  const [amount, setAmount] = useState(1);

  const artir = () => {
    setSayi(sayi + amount);
  };

  const artirAmount = () => {
    setAmount(amount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sayı: {sayi}</Text>

      <TouchableOpacity onPress={artir} style={styles.button}>
        <Text style={styles.buttonText}>Artır</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={artirAmount} style={styles.button}>
        <Text style={styles.buttonText}>Amount Artır</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Amount: {amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 23,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
});

export default App;
