import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalculadora} from '../components/BotonCalculadora';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    limpiar,
    armarNumero,
    positivoNegativo,
    handleDelete,
    handleDividir,
    handleMultiplicar,
    handleSumar,
    handleRestar,
    calcular,
    numeroAnterior,
    numero,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora title="C" color="#9B9B8B" onPress={limpiar} />
        <BotonCalculadora
          title="+/-"
          color="#9B9B8B"
          onPress={positivoNegativo}
        />
        <BotonCalculadora title="del" color="#9B9B8B" onPress={handleDelete} />
        <BotonCalculadora title="/" color="#FF9427" onPress={handleDividir} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora title="7" onPress={armarNumero} />
        <BotonCalculadora title="8" onPress={armarNumero} />
        <BotonCalculadora title="9" onPress={armarNumero} />
        <BotonCalculadora
          title="X"
          color="#FF9427"
          onPress={handleMultiplicar}
        />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora title="4" onPress={armarNumero} />
        <BotonCalculadora title="5" onPress={armarNumero} />
        <BotonCalculadora title="6" onPress={armarNumero} />
        <BotonCalculadora title="-" color="#FF9427" onPress={handleRestar} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora title="1" onPress={armarNumero} />
        <BotonCalculadora title="2" onPress={armarNumero} />
        <BotonCalculadora title="3" onPress={armarNumero} />
        <BotonCalculadora title="+" color="#FF9427" onPress={handleSumar} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalculadora title="0" ancho onPress={armarNumero} />
        <BotonCalculadora title="." onPress={armarNumero} />
        <BotonCalculadora title="=" color="#FF9427" onPress={calcular} />
      </View>
    </View>
  );
};

/*
  #2D2D2D
  #FF9427
*/
