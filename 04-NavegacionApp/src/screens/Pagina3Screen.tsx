import React from 'react';
import {Text, View, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}
export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button
        title="Volver a la pagina 1"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
