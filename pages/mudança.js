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
            Qual sera a mudança
          </Text>

          {/* Campo material */}
          <View style={styles.materialArea}>

            <Text style={styles.label}>
              escolha um bem material
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
              justifique o porque da mudança
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
    height: 33,
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
    width: 225,
    height: 301,

    backgroundColor: "#fff",

    borderRadius: 9,

    alignItems: "center",

    paddingTop: 7,
  },

 

  /* TÍTULO */
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#914CFF",

    marginBottom: 43,
  },

  /* MATERIAL */
  materialArea: {
    width: 164,

    alignItems: "flex-start",

    marginBottom: 14,
  },

  /* JUSTIFICATIVA */
  justificativaArea: {
    width: 183,

    alignItems: "flex-start",
  },

  /* TEXTOS */
  label: {
    fontSize: 10,
    fontWeight: "500",

    color: "#111",

    marginLeft: 6,
    marginBottom: 7,
  },

  /* INPUT ROXO */
  materialInput: {
    width: 131,
    height: 21,

    backgroundColor: "#914CFF",

    borderRadius: 6,

    paddingHorizontal: 7,

    color: "#fff",

    fontSize: 10,
  },

  /* CAIXA DE TEXTO */
  textArea: {
    width: 183,
    height: 75,

    backgroundColor: "#914CFF",

    borderRadius: 6,

    paddingHorizontal: 8,
    paddingTop: 7,

    color: "#fff",

    fontSize: 11,
  },

  /* BOTÃO */
  nextButton: {
    width: 65,
    height: 13,

    backgroundColor: "#914CFF",

    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 21,
  },

});