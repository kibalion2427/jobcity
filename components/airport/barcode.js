import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, Image } from "react-native";
import styles from "../../styles/barCodeStyles";

const BarCode = (data) => {
  const [isLoading, setLoading] = useState(true);
  const [barcode, setBarcode] = useState([]);
  console.log("DATA", data.data);
  useEffect(() => {
    fetch("http://192.168.100.3:3000/api/v1", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passengerPassport: data.data.getPassenger.passengerPassport,
        flightNumber: data.data.getPassenger.passengerFlight.flightNumber,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setBarcode(json.image64);
        // console.log(json.image64);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.barCodeText}>Barcode</Text>
      <View style={styles.bar}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0061D7"
            style={styles.loading}
          />
        ) : (
          <Image style={styles.barCodeImage} source={{ uri: barcode.data }} />
        )}
      </View>
    </View>
  );
};

export default BarCode;
