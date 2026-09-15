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

const NAVY = '#000000';
const ORANGE = '#9147FF';

export default function Aluno({ onVoltar, onCadastroConcluido }) {
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
              <Text style={styles.subtitle}>Crie seu acesso para continuar</Text>

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
                  styles.backButton,
                  pressed && styles.backButtonPressed,
                ]}
                onPress={onVoltar}
              >
                <Text style={styles.backText}>←  Voltar</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed,
                ]}
                onPress={cadastrar}
              >
                <Text style={styles.buttonText}>Continuar</Text>
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
    backgroundColor: NAVY,
  },

  container: {
    flex: 1,
    backgroundColor: NAVY,
  },

  topBar: {
    height: 10,
    width: '100%',
    backgroundColor: ORANGE,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 56,
  },

  card: {
    width: '90%',
    maxWidth: 620,
    minHeight: 560,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 30,
    paddingTop: 32,
    paddingBottom: 34,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
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
    backgroundColor: ORANGE,
    transform: [{ rotate: '-45deg' }],
    left: 2,
    top: 12,
  },

  roofRight: {
    position: 'absolute',
    width: 19,
    height: 3,
    backgroundColor: ORANGE,
    transform: [{ rotate: '45deg' }],
    right: 2,
    top: 12,
  },

  house: {
    position: 'absolute',
    width: 24,
    height: 21,
    borderWidth: 2.5,
    borderColor: ORANGE,
    left: 9,
    top: 14,
  },

  door: {
    position: 'absolute',
    width: 7,
    height: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: ORANGE,
    bottom: 0,
    left: 6,
  },

  title: {
    color: ORANGE,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },

  subtitle: {
    color: '#666',
    fontSize: 14,
    marginBottom: 28,
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
    backgroundColor: ORANGE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingHorizontal: 12,
    paddingVertical: 0,
    color: '#fff',
    fontSize: 14,
  },

  button: {
    marginTop: 32,
    width: '100%',
    height: 52,
    borderRadius: 14,
    backgroundColor: ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButton: {
    width: 132,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 20,
    backgroundColor: '#F1E9FF',
  },

  backButtonPressed: {
    opacity: 0.7,
    transform: [{ translateX: -2 }],
  },

  backText: {
    color: ORANGE,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});
