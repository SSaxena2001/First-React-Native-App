import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import DefaultStyle from "../constants/default-styles";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyle.bodyText}>The game is over!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Number of Rounds: {props.rounds}
          </Text>
          <Text style={styles.resultText}>Number was {props.userNumber}</Text>
          <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
