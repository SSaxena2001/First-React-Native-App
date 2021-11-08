import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";
import Colors from "../constants/colors";
import DefaultStyle from "../constants/default-styles";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInput = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInput = () => {
    setEnteredValue("");
    setConfirm(false);
  };
  const confirmInput = () => {
    const chosenNum = parseInt(enteredValue);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }
    setConfirm(true);
    setSelectedNumber(chosenNum);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmOutput;
  if (confirm) {
    confirmOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={DefaultStyle.bodyText}>You Selected</Text>
        <Number>{selectedNumber}</Number>
        <Button
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start the Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.text}>Select a Number!</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            autoCorrect={false}
            onChangeText={numberInput}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="Reset"
              onPress={resetInput}
              color={Colors.primary}
            />
            <Button
              style={styles.button}
              title="Confirm"
              onPress={confirmInput}
              color={Colors.accent}
            />
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans",
  },
});

export default StartGameScreen;
