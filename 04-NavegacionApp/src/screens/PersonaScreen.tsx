import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouterParams;
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        PersonaScreen {JSON.stringify(params, null, 3)}{' '}
      </Text>
    </View>
  );
};
