import React from "react";
import { View, StyleSheet, Button } from "react-native";

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.btn}>
      <Button onPress={onPress} title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginLeft: 20,
  },
});

export default AddButton;
