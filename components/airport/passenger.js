import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Button from "./button";
import Barcode from "./barcode";
import Limiter from "./limiter";

import styles from "../../styles/passengerStyles";

const GET_PASSENGER = gql`
  query {
    getPassenger(id: 1) {
      passengerName
      passengerPassport
      passengerFlight {
        id
        flightNumber
        terminalNumber
        checkIn
        gate
      }
    }
  }
`;
export default () => (
  <Query query={GET_PASSENGER}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <View style={styles.card}>
            <ActivityIndicator
              size="large"
              color="#0061D7"
              style={styles.loading}
            />
          </View>
        );
      if (error)
        return (
          <View style={styles.card}>
            <Text>{`Error no: ${error}`}</Text>
          </View>
        );
      return (
        <View style={styles.card}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.passengerDetailsContainer}>
              <Text style={styles.passengerText}>Passenger</Text>
              <View style={styles.passengerDetails}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Mr. {data.getPassenger.passengerName}
                </Text>
              </View>
            </View>
            <View style={{ marginRight: 10 }}>
              <Button colorButton="#0061D7" colorText="white" title="Add-ons" />
            </View>
          </View>

          <View style={styles.ticketDetails}>
            <View style={styles.th}>
              <Text style={styles.thText}>Terminal</Text>
              <Text style={styles.thText}>Check-in</Text>
              <Text style={styles.thText}>Gate</Text>
              <Text style={styles.thText}>Boarding</Text>
            </View>
            <View style={styles.tb}>
              <Text style={styles.tbText}>
                {data.getPassenger.passengerFlight.terminalNumber}
              </Text>
              <Text style={styles.tbText}>
                {data.getPassenger.passengerFlight.checkIn}
              </Text>
              <Text style={styles.tbText}>
                {data.getPassenger.passengerFlight.gate}
              </Text>
              <Text style={styles.tbText}>06:00</Text>
            </View>
            <Limiter />
            <Barcode data={data} />
          </View>
        </View>
      );
    }}
  </Query>
);
