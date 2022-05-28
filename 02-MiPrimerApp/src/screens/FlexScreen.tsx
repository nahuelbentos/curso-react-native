import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 300,
    // width: 100,
    backgroundColor: '#28C4D9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  caja1: {
    borderWidth: 2,
    fontSize: 30,
    borderColor: 'white',
    // alignSelf: 'center',
  },
  caja2: {
    // flex: 2,
    borderWidth: 2,
    fontSize: 30,
    borderColor: 'white',
    // alignSelf: 'flex-start',
  },
  caja3: {
    // flex: 1,
    borderWidth: 2,
    fontSize: 30,
    borderColor: 'white',
    // alignSelf: 'flex-end',
  },
});
