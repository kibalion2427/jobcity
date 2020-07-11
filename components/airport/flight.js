import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../../styles/flightStyles";
import EmiratesLogo from "./emiratesLogo";
const Flight = () => {
  return (
    <View style={styles.card}>
      <View style={styles.depart}>
        <View style={styles.hourContainer}>
          <Text style={styles.departText}>Depart</Text>
          <Text style={styles.hourText}>06:50</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Monday November 18</Text>
        </View>
      </View>
      <View style={styles.flight}>
        <View style={styles.logo}>
          <EmiratesLogo />
        </View>
        <View style={styles.temporizer}>
          <Text style={styles.hourStopText}>10h 05m 0stop</Text>
        </View>
        <View style={styles.flightTextContainer}>
          <Text style={styles.flightNumber}>ET490 A380-800</Text>
        </View>
      </View>
      <View style={styles.arrive}>
        <View style={styles.hourContainer}>
          <Text style={styles.arriveText}>Arrive</Text>
          <Text style={styles.hourArriveText}>17:55</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateArriveText}>Sunday November 29</Text>
        </View>
      </View>
    </View>
  );
};

export default Flight;
