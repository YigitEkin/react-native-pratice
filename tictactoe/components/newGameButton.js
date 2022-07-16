import React from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";

const NewGameButton = ({ resetGame }) => {
  return (
    <View style={styles.btn}>
      <Button style={styles.btn} title="New Game" onPress={resetGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewGameButton;
