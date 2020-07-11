import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./button";

const PrintButton = () => {
  return (
    <View style={styles.container}>
      <Button
        colorButton="#FEDF00"
        colorText="#2376B5"
        title="Print Ticket"
        iconName="md-print"
        iconColor="#2376B5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",
    top: -40,
  },
});
export default PrintButton;
