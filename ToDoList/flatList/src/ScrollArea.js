import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ToDo from "./ToDo";

const ScrollArea = ({ data, remove }) => {
  return (
    <View style={styles}>
      <FlatList
        data={data}
        renderItem={(item) => {
          console.log(item.item.data);
          return (
            <ToDo onPress={remove} value={item.item.data} id={item.item.id} />
          );
        }}
        style={styles.scrolView}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  scrolView: {
    width: "100%",
    height: "100%",
  },
});

export default ScrollArea;
