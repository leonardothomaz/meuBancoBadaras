import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

export default function Form() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueSlider, setSelectedValueSlider] = useState(250);
  const [name, onChangeName] = useState("");
  const [age, onChangeAge] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);

  const [inputNameNotSet, setInputNameNotSet] = useState(false);
  const [inputAgeNotSet, setInputAgeNotSet] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    if (isEnabled && selectedValueSlider > 1000) {
      setSelectedValueSlider(1000);
    }
  }, [isEnabled]);

  function handleSubmitForm(event) {
    event.preventDefault();
    setInputNameNotSet(false);
    setInputAgeNotSet(false);

    if (!name) {
      setInputNameNotSet(true);
    }
    if (!age) {
      setInputAgeNotSet(true);
    }
    if (inputNameNotSet || inputAgeNotSet) {
      return false;
    }
    let stringSexo =
      selectedValue != "no" ? `Você declarou ser ${selectedValue}` : "";
    Alert.alert(
      "Parabéns",
      `Olá ${name} seu cadastro foi concluído com sucesso, 
      ${stringSexo} com ${age} Anos o limite selecionado por ti foi ${selectedValueSlider
        .toFixed(2)
        .replace(".", ",")}
        você diz ${isEnabled ? "ser" : "não ser"} estudante
        !`
    );
  }

  return (
    <>
      <Text style={styles.text}>Nome:</Text>
      <View style={styles.container}>
        <TextInput
          style={
            !!inputNameNotSet ? styles.textInputWithError : styles.textInput
          }
          placeholder={"Informe seu nome!!"}
          placeholderTextColor={!!inputNameNotSet ? "#c53030" : "#a3a1a1"}
          onChangeText={onChangeName}
          value={name}
        />
      </View>
      <Text style={styles.text}>Idade:</Text>
      <View style={styles.container}>
        <TextInput
          style={
            !!inputAgeNotSet ? styles.textInputWithError : styles.textInput
          }
          placeholder={"Informe sua idade!!"}
          placeholderTextColor={!!inputAgeNotSet ? "#c53030" : "#a3a1a1"}
          keyboardType="numeric"
          onChangeText={onChangeAge}
          value={age}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Homem" value="homem" />
          <Picker.Item label="Mulher" value="mulher" />
          <Picker.Item label="Prefiro Não informar" value="no" />
        </Picker>
      </View>
      <View style={styles.viewInlineCenter}>
        <Text style={styles.text}>Estudante:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#11727c" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.viewInline}>
        <Text style={styles.text}>Seu limite:</Text>
        <Text style={styles.textValue}>
          R$ {selectedValueSlider.toFixed(2).replace(".", ",")}
        </Text>
      </View>
      <View style={styles.container}>
        <Slider
          style={{ width: 285, height: 40 }}
          minimumValue={250}
          maximumValue={isEnabled ? 1000 : 2500}
          minimumTrackTintColor="#81b0ff"
          maximumTrackTintColor="#11727c"
          onValueChange={(itemValue) => setSelectedValueSlider(itemValue)}
          value={selectedValueSlider}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleSubmitForm}>
          <Text style={styles.textButton}>Abrir Conta</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#def7f7",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 280,
    height: 40,
    color: "#11727c",
    borderColor: "#000",
    borderWidth: 0.1,
    borderRadius: 40,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  textInputWithError: {
    width: 280,
    height: 40,
    color: "#11727c",
    borderColor: "#c53030",
    borderWidth: 1.5,
    borderRadius: 40,
    paddingLeft: 15,
    backgroundColor: "#fff",
  },
  text: {
    paddingLeft: 70,
    paddingTop: 5,
    paddingRight: 5,
    backgroundColor: "#def7f7",
    color: "#11727c",
  },
  textValue: {
    color: "#05b537",
  },
  picker: {
    width: 275,
    color: "#11727c",
  },
  viewInline: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  viewInlineCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ceffff",
    padding: 10,
    borderRadius: 50,
    width: 200,
    borderColor: "#11727c",
    borderWidth: 2,
  },
  textButton: {
    color: "#11727c",
  },
});
