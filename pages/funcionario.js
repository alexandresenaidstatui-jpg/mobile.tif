import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



export default function Funcionario({ onVoltar, onCadastroConcluido }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [registro, setRegistro] = useState("");
  const [materias, setMaterias] = useState("");

  function continuar() {
    if (!nome || !email || !senha || !registro || !materias) {
      Alert.alert(
        "Atenção",
        "Preencha todos os campos para continuar."
      );
      return;
    }

    Alert.alert(
      "Sucesso",
      "Identificação cadastrada com sucesso!",
      [{
        text: "Continuar",
        onPress: onCadastroConcluido,
      }]
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

      {/* Barra superior */}
      <View style={styles.topBar} />

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >

        {/* Card principal */}
        <View style={styles.card}>

          

          {/* Título */}
          <Text style={styles.title}>
            Identificação
          </Text>

          {/* Nome */}
          <View style={styles.fieldFull}>
            <Text style={styles.label}>
              Nome do funcionário
            </Text>

            <TextInput
              value={nome}
              onChangeText={setNome}
              style={styles.input}
              placeholder=""
              placeholderTextColor="#999"
            />
          </View>

          {/* Email e Senha */}
          <View style={styles.row}>

            <View style={styles.field}>
              <Text style={styles.label}>
                email
              </Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                Senha
              </Text>

              <TextInput
                value={senha}
                onChangeText={setSenha}
                style={styles.input}
                secureTextEntry
              />
            </View>

          </View>

          {/* Registro e matérias */}
          <View style={styles.row}>

            <View style={styles.field}>
              <Text style={styles.label}>
                Registro de funcionário
              </Text>

              <TextInput
                value={registro}
                onChangeText={setRegistro}
                style={styles.input}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>
                materias
              </Text>

              <TextInput
                value={materias}
                onChangeText={setMaterias}
                style={styles.input}
              />
            </View>

          </View>

          {/* Botão */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={onVoltar}
            activeOpacity={0.8}
          >
            <Text style={styles.backText}>←  Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={continuar}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  
  topBar: {
    height: 10,
    width: "100%",
    backgroundColor: "#914CFF",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

 
  card: {
    width: "88%",
    maxWidth: 620,
    minHeight: 500,
    backgroundColor: "#fff",
    borderRadius: 24,

    paddingHorizontal: 30,
    paddingTop: 26,
    paddingBottom: 34,

    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  
  title: {
    color: "#111",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
  },

  fieldFull: {
    width: "100%",
    marginBottom: 24,
  },

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  field: {
    width: "46%",
  },

  label: {
    color: "#111",
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "500",
  },

  input: {
    height: 30,
    width: "100%",

    backgroundColor: "#914CFF",

    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CBD5E1",

    paddingHorizontal: 12,
    paddingVertical: 0,

    color: "#fff",
    fontSize: 14,
  },

 
  nextButton: {
    width: "100%",
    height: 52,

    backgroundColor: "#914CFF",

    borderRadius: 14,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 32,
  },

  backButton: {
    width: 132,
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginTop: 20,
    backgroundColor: "#F1E9FF",
  },

  backText: {
    color: "#914CFF",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },

});