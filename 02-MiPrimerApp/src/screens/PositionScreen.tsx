import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      {/* <Text style={styles.title}>
        W: {width} ,{`\n`}
        H: {height}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 400,
    height: 400,
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cajaVerde: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // top: 0,
    // right: 0
    ...StyleSheet.absoluteFillObject
  },
});
