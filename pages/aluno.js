import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const PURPLE = '#9147FF';

export default function Aluno({ onCadastroConcluido }) {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');

  function cadastrar() {
    if (!email || !nome || !senha || !confirmarSenha || !cpf || !cep) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não são iguais.');
      return;
    }

    Alert.alert(
      'Sucesso',
      'Aluno cadastrado!',
      [{
        text: 'Continuar',
        onPress: onCadastroConcluido,
      }]
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          {/* Barra superior */}
          <View style={styles.topBar} />

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            {/* Card */}
            <View style={styles.card}>

              {/* Ícone */}
              <View style={styles.homeIcon}>
                <View style={styles.roofLeft} />
                <View style={styles.roofRight} />
                <View style={styles.house}>
                  <View style={styles.door} />
                </View>
              </View>

              {/* Título */}
              <Text style={styles.title}>Cadastrar aluno</Text>

              {/* Primeira linha */}
              <View style={styles.row}>
                <Field
                  label="Email"
                  value={email}
                  onChangeText={setEmail}
                  width="40%"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Field
                  label="Nome completo"
                  value={nome}
                  onChangeText={setNome}
                  width="40%"
                />
              </View>

              {/* Senha */}
              <Field
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                width="40%"
                secureTextEntry
              />

              {/* Confirmar senha / CPF / CEP */}
              <View style={styles.row}>
                <Field
                  label="Confirmar senha"
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  width="40%"
                  secureTextEntry
                />

                <Field
                  label="Cpf"
                  value={cpf}
                  onChangeText={setCpf}
                  width="20%"
                  keyboardType="numeric"
                  maxLength={11}
                />

                <Field
                  label="Cep"
                  value={cep}
                  onChangeText={setCep}
                  width="16%"
                  keyboardType="numeric"
                  maxLength={8}
                />
              </View>

              {/* Botão */}
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed,
                ]}
                onPress={cadastrar}
              >
                <Text style={styles.arrow}>▶</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Field({
  label,
  value,
  onChangeText,
  width,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  maxLength,
}) {
  return (
    <View style={[styles.fieldContainer, { width }]}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },

  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  topBar: {
    height: 35,
    width: '100%',
    backgroundColor: PURPLE,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 56,
  },

  card: {
    width: '88%',
    maxWidth: 620,
    minHeight: 500,
    backgroundColor: '#fff',
    borderRadius: 11,
    paddingHorizontal: 30,
    paddingTop: 26,
    paddingBottom: 34,
    alignItems: 'center',
  },

  homeIcon: {
    width: 42,
    height: 44,
    marginBottom: 8,
    position: 'relative',
  },

  roofLeft: {
    position: 'absolute',
    width: 19,
    height: 3,
    backgroundColor: PURPLE,
    transform: [{ rotate: '-45deg' }],
    left: 2,
    top: 12,
  },

  roofRight: {
    position: 'absolute',
    width: 19,
    height: 3,
    backgroundColor: PURPLE,
    transform: [{ rotate: '45deg' }],
    right: 2,
    top: 12,
  },

  house: {
    position: 'absolute',
    width: 24,
    height: 21,
    borderWidth: 2.5,
    borderColor: PURPLE,
    left: 9,
    top: 14,
  },

  door: {
    position: 'absolute',
    width: 7,
    height: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: PURPLE,
    bottom: 0,
    left: 6,
  },

  title: {
    color: PURPLE,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 34,
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 24,
  },

  fieldContainer: {
    minWidth: 0,
  },

  label: {
    color: '#111',
    fontSize: 14,
    marginLeft: 6,
    marginBottom: 5,
  },

  input: {
    height: 30,
    backgroundColor: PURPLE,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 0,
    color: '#fff',
    fontSize: 14,
  },

  button: {
    marginTop: 32,
    width: 110,
    height: 34,
    borderRadius: 10,
    backgroundColor: PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },

  arrow: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 2,
  },
});
