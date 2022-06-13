import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Button} from 'react-native';
import {styles} from '../themes/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation<any>(); //<any>

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina2Screen</Text>
      <Button
        title="Ir pagina tres"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
