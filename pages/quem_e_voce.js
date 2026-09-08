import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

const PURPLE = '#9147FF';

export default function Quem_E_Você({ onAlunoContinue }) {
  const [tipo, setTipo] = useState(null);

  function continuar() {
    if (!tipo) {
      Alert.alert('Atenção', 'Selecione uma opção.');
      return;
    }

    if (tipo === 'aluno') {
      onAlunoContinue();
      return;
    }

    Alert.alert('Perfil selecionado', 'Você selecionou Funcionário.');
  }

  return (
    <View style={styles.container}>

      {/* Faixa roxa superior */}
      <View style={styles.topBar} />

      {/* Área principal */}
      <View style={styles.content}>

        {/* Card branco */}
        <View style={styles.card}>

          {/* Ícone de casa */}
          <View style={styles.homeIcon}>
            <View style={styles.roofLeft} />
            <View style={styles.roofRight} />

            <View style={styles.house}>
              <View style={styles.door} />
            </View>
          </View>

          {/* Título */}
          <Text style={styles.title}>
            Quem é você
          </Text>

          {/* Botão Aluno */}
          <Pressable
            onPress={() => setTipo('aluno')}
            style={[
              styles.option,
              tipo === 'aluno' && styles.optionSelected,
            ]}
          >
            <Text style={styles.optionText}>
              Aluno
            </Text>
          </Pressable>

          {/* Botão Funcionário */}
          <Pressable
            onPress={() => setTipo('funcionario')}
            style={[
              styles.option,
              tipo === 'funcionario' && styles.optionSelected,
            ]}
          >
            <Text style={styles.optionText}>
              Funcionário
            </Text>
          </Pressable>

          {/* Botão continuar */}
          <Pressable
            onPress={continuar}
            style={({ pressed }) => [
              styles.continueButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.arrow}>
              ▶
            </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  topBar: {
    height: 35,
    backgroundColor: PURPLE,
    width: '100%',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: '74%',
    height: 235,

    backgroundColor: '#fff',

    borderRadius: 11,

    alignItems: 'center',

    paddingTop: 12,
  },

  /*
   * Ícone de casa
   */
  homeIcon: {
    width: 28,
    height: 30,
    position: 'relative',
    marginBottom: 0,
  },

  roofLeft: {
    position: 'absolute',

    width: 13,
    height: 2,

    backgroundColor: PURPLE,

    left: 1,
    top: 8,

    transform: [
      { rotate: '-45deg' },
    ],
  },

  roofRight: {
    position: 'absolute',

    width: 13,
    height: 2,

    backgroundColor: PURPLE,

    right: 1,
    top: 8,

    transform: [
      { rotate: '45deg' },
    ],
  },

  house: {
    position: 'absolute',

    width: 16,
    height: 14,

    borderWidth: 1.5,
    borderColor: PURPLE,

    left: 6,
    top: 9,
  },

  door: {
    position: 'absolute',

    width: 5,
    height: 7,

    borderWidth: 1,
    borderColor: PURPLE,

    left: 4,
    bottom: 0,
  },

  /*
   * Título
   */
  title: {
    color: PURPLE,

    fontSize: 16,

    fontWeight: '700',

    marginTop: 0,
    marginBottom: 20,
  },

  /*
   * Opções
   */
  option: {
    width: '58%',
    height: 12,

    borderRadius: 10,

    backgroundColor: PURPLE,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 32,
  },

  optionSelected: {
    backgroundColor: '#7D35F5',

    transform: [
      { scale: 1.03 },
    ],
  },

  optionText: {
    color: '#000',

    fontSize: 9,

    fontWeight: '500',

    lineHeight: 10,
  },

  /*
   * Botão inferior
   */
  continueButton: {
    position: 'absolute',

    bottom: 28,

    width: 76,
    height: 15,

    borderRadius: 10,

    backgroundColor: PURPLE,

    alignItems: 'center',
    justifyContent: 'center',
  },

  arrow: {
    color: '#fff',

    fontSize: 10,

    marginLeft: 2,
  },

  pressed: {
    opacity: 0.7,

    transform: [
      { scale: 0.95 },
    ],
  },
});
