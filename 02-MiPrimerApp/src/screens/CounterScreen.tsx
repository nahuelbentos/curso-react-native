import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <Fab title="+1" onPress={() => setContador(contador + 1)} />
      <Fab
        title="-1"
        onPress={() => setContador(contador - 1)}
        position="bottomLeft"
      />
      {/* <TouchableOpacity
        onPress={() => setContador(contador - 1)}
        style={styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> -1 </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    top: -15,
    textAlign: 'center',
  },
});
