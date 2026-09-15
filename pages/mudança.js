import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function QualSeraMudanca({ }) {

  const [material, setMaterial] = useState("");
  const [justificativa, setJustificativa] = useState("");

  function continuar() {
    if (!material || !justificativa) {
      Alert.alert(
        "Atenção",
        "Preencha todos os campos."
      );
      return;
    }

    // Próxima tela
    // navigation.navigate("ProximaTela");

    Alert.alert(
      "Sucesso",
      "Informações preenchidas!"
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

      {/* Barra superior */}
      <View style={styles.topBar} />

      <KeyboardAvoidingView
        style={styles.content}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >

        {/* CARD */}
        <View style={styles.card}>


          {/* Título */}
          <Text style={styles.title}>
            Qual será a mudança?
          </Text>

          {/* Campo material */}
          <View style={styles.materialArea}>

            <Text style={styles.label}>
              O que você quer mudar?
            </Text>

            <TextInput
              value={material}
              onChangeText={setMaterial}
              style={styles.materialInput}
            />

          </View>

          {/* Justificativa */}
          <View style={styles.justificativaArea}>

            <Text style={styles.label}>
              Conte o motivo da mudança
            </Text>

            <TextInput
              value={justificativa}
              onChangeText={setJustificativa}
              multiline
              textAlignVertical="top"
              style={styles.textArea}
            />

          </View>

          {/* Botão */}
          <TouchableOpacity
            style={styles.nextButton}
            activeOpacity={0.8}
            onPress={continuar}
          >
            <Text style={styles.buttonText}>Enviar resposta</Text>
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

  /* BARRA ROXA */
  topBar: {
    height: 10,
    width: "100%",
    backgroundColor: "#914CFF",
  },

  /* ÁREA CENTRAL */
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  /* CARD BRANCO */
  card: {
    width: "88%",
    maxWidth: 440,
    minHeight: 380,

    backgroundColor: "#fff",

    borderRadius: 24,

    alignItems: "center",

    paddingTop: 34,
    paddingHorizontal: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },

 

  /* TÍTULO */
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#914CFF",

    marginBottom: 28,
  },

  /* MATERIAL */
  materialArea: {
    width: "100%",

    alignItems: "flex-start",

    marginBottom: 14,
  },

  /* JUSTIFICATIVA */
  justificativaArea: {
    width: "100%",

    alignItems: "flex-start",
  },

  /* TEXTOS */
  label: {
    fontSize: 13,
    fontWeight: "500",

    color: "#111",

    marginLeft: 6,
    marginBottom: 8,
  },

  /* INPUT ROXO */
  materialInput: {
    width: "100%",
    height: 48,

    backgroundColor: "#914CFF",

    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CBD5E1",

    paddingHorizontal: 7,

    color: "#fff",

    fontSize: 14,
  },

  /* CAIXA DE TEXTO */
  textArea: {
    width: "100%",
    height: 110,

    backgroundColor: "#914CFF",

    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#CBD5E1",

    paddingHorizontal: 8,
    paddingTop: 7,

    color: "#fff",

    fontSize: 14,
  },

  /* BOTÃO */
  nextButton: {
    width: "100%",
    height: 52,

    backgroundColor: "#914CFF",

    borderRadius: 14,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 21,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },

});