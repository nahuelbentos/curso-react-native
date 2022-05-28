import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  position?: 'bottomLeft' | 'bottomRight';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'bottomRight'}: Props) => {
  const ios = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.fabLocation,
        position === 'bottomRight' ? styles.right : styles.left,
      ]}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}> {title}</Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View
      style={[
        styles.fabLocation,
        position === 'bottomRight' ? styles.right : styles.left,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },

  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
