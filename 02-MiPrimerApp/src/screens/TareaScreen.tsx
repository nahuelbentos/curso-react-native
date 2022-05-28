import React from 'react';
import {View, StyleSheet} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    flex: 1,
  },
  cajaNaranja: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    flex: 1,
  },
  cajaAzul: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    flex: 2,
  },
});
