import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tic Tac Toe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
  },
  text: {
    marginTop: 10,
    color: "#fff",
    fontSize: 30,
  },
});

export default Navbar;
