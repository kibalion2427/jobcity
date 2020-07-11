import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Limiter = () => {
  //   return <View style={styles.line}></View>;
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        borderRadius: 1,
        borderWidth: 1,
        borderColor: "#C3C3C3",
        borderStyle: "dashed",
        zIndex: 0,
        marginTop: 20,
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: 1,
          backgroundColor: "white",
          zIndex: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "dotted",
    fontSize: 50,
    marginTop: 20,
  },
});
export default Limiter;
