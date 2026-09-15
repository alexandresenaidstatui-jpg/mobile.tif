import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

const NAVY = '#000000';
const ORANGE = '#9147FF';

export default function Quem_E_Voce({ onAlunoContinue, onFuncionarioContinue }) {
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

    onFuncionarioContinue();
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

          <Text style={styles.subtitle}>
            Escolha seu perfil para continuar
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
            <Text style={styles.arrow}>Continuar</Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NAVY,
  },

  topBar: {
    height: 10,
    backgroundColor: ORANGE,
    width: '100%',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: '88%',
    maxWidth: 440,
    minHeight: 430,
    backgroundColor: '#fff',
    borderRadius: 24,
    alignItems: 'center',
    paddingTop: 42,
    paddingHorizontal: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },

  /*
   * Ícone de casa
   */
  homeIcon: {
    width: 42,
    height: 44,
    position: 'relative',
    marginBottom: 14,
  },

  roofLeft: {
    position: 'absolute',

    width: 19,
    height: 3,

    backgroundColor: ORANGE,

    left: 2,
    top: 12,

    transform: [
      { rotate: '-45deg' },
    ],
  },

  roofRight: {
    position: 'absolute',

    width: 19,
    height: 3,

    backgroundColor: ORANGE,

    right: 2,
    top: 12,

    transform: [
      { rotate: '45deg' },
    ],
  },

  house: {
    position: 'absolute',

    width: 24,
    height: 21,

    borderWidth: 2,
    borderColor: ORANGE,

    left: 9,
    top: 14,
  },

  door: {
    position: 'absolute',

    width: 7,
    height: 10,

    borderWidth: 1.5,
    borderColor: ORANGE,

    left: 6,
    bottom: 0,
  },

  /*
   * Título
   */
  title: {
    color: ORANGE,
    fontSize: 28,
    fontWeight: '700',
    marginTop: 0,
    marginBottom: 8,
  },

  subtitle: {
    color: '#666',
    fontSize: 14,
    marginBottom: 30,
  },

  /*
   * Opções
   */
  option: {
    width: '100%',
    height: 52,
    borderRadius: 14,
    backgroundColor: ORANGE,
    borderWidth: 1,
    borderColor: '#CBD5E1',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 14,
  },

  optionSelected: {
    backgroundColor: '#7D35F5',
    borderColor: ORANGE,
  },

  optionText: {
    color: '#000',

    fontSize: 16,

    fontWeight: '700',

    lineHeight: 18,
  },

  /*
   * Botão inferior
   */
  continueButton: {
    position: 'absolute',

    bottom: 32,
    width: '100%',
    height: 52,
    borderRadius: 14,
    backgroundColor: ORANGE,

    alignItems: 'center',
    justifyContent: 'center',
  },

  arrow: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  pressed: {
    opacity: 0.7,

    transform: [
      { scale: 0.95 },
    ],
  },
});
