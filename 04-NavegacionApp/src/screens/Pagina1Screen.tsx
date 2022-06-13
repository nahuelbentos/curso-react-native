import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../themes/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir pagina dos"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Button
        title="Ir a persona"
        onPress={() =>
          navigation.navigate('PersonaScreen', {id: 3, name: 'Sin Nombre'})
        }
      />

      <Text> Navegar con argumentos </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, name: 'Pedro'})
          }>
          <Text style={styles.botonGrandeTexto}> Pedro </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, name: 'Maria'})
          }>
          <Text style={styles.botonGrandeTexto}> Maria </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
