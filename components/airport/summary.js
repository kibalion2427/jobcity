import React from "react";
import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

import styles from "../../styles/summaryStyles";

const Summary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Ionicons name="md-arrow-back" size={24} color="white" />
        <Ionicons name="md-notifications-outline" size={24} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.h1}>CGK</Text>
        <Svg height="240" width="240">
          <Path
            d="M 230 120 Q 115 65 6.5 120 "
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeDasharray="1,8"
            strokeLinecap="round"
          />
        </Svg>
        <Text style={styles.h1}>LHR</Text>
        <Ionicons name="md-airplane" size={50} style={styles.airIcon} />
      </View>
    </View>
  );
};

export default Summary;
