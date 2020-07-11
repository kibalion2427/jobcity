import React, { Component } from "react";
import { Image } from "react-native";

const EmiratesLogo = () => {
  return (
    <Image
      source={require("../../assets/emirates-2.png")}
      style={{
        width: 70,
        height: 50,
        resizeMode: "contain",
      }}
    />
  );
};

export default EmiratesLogo;
