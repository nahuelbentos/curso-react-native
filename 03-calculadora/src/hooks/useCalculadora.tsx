import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };
  const armarNumero = (numeroTexto: string) => {
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //Evaluar si es otro cero, y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
      return;
    }
    setNumero('-' + numero);
  };

  const handleDelete = () => {
    if ((numero.includes('-') && numero.length === 2) || numero.length <= 1) {
      return setNumero('0');
    }
    return setNumero(numero.substring(0, numero.length - 1));
  };

  const changeNumberBefore = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }

    setNumero('0');
  };

  const handleDividir = () => {
    changeNumberBefore();
    ultimaOperacion.current = Operadores.dividir;
  };
  const handleMultiplicar = () => {
    changeNumberBefore();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const handleSumar = () => {
    changeNumberBefore();
    ultimaOperacion.current = Operadores.sumar;
  };
  const handleRestar = () => {
    changeNumberBefore();
    ultimaOperacion.current = Operadores.restar;
  };

  const calcular = () => {
    const numero1 = Number(numero);
    const numero2 = Number(numeroAnterior);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${numero1 + numero2}`);

        break;
      case Operadores.restar:
        setNumero(`${numero2 - numero1}`);

        break;
      case Operadores.multiplicar:
        setNumero(`${numero1 * numero2}`);
        break;
      case Operadores.dividir:
        if (numero1 === 0) {
          setNumero('No se puede dividir entre cero.');
        } else {
          setNumero(`${numero2 / numero1}`);
        }
        break;
    }
    setNumeroAnterior('0');
  };

  return {
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
  };
};
