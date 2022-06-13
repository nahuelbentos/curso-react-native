import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../themes/appTheme';

export const SettingsScreen = () => {
  const insest = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.globalMargin,

        marginTop: insest.top + 20,
      }}>
      <Text style={styles.title}> SettingsScreen -- Fuera del STACK </Text>
    </View>
  );
};
