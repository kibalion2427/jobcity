import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Button = ({ colorButton, colorText, iconName, iconColor, title }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: colorButton,
          flexDirection: "row",
          justifyContent: "space-around",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 20,
          paddingRight: 20,

          //SHADOW
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}
        // onPress = { () =>
        // this.props.navigation.navigate('Details')}
      >
        {iconName ? (
          <Ionicons name={iconName} size={24} color={iconColor} />
        ) : (
          <View style={{ display: "none" }} />
        )}
        <Text style={{ color: colorText, padding: 5, fontWeight: "bold" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#0061D7",
    width: 150,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Button;
