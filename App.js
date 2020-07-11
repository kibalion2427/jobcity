import React, { Component, useState } from "react";
import { View, Button, Platform, StyleSheet } from "react-native";
import { AppRegistry } from "react-native";
import { registerRootComponent } from "expo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Summary from "./components/airport/summary";
import Passenger from "./components/airport/passenger";
import Flight from "./components/airport/flight";
import PrintButton from "./components/airport/print";

import { graphql } from "react-apollo";
// import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// class App extends Component {

const client = new ApolloClient({
  uri: `http://192.168.100.3:3000/graphql`,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.Screen}>
        <Summary />
        <Flight />
        <Passenger />
        <PrintButton />
        {/* <ExchangeRateView /> */}
      </View>
    </ApolloProvider>
  );
};
// }

const styles = StyleSheet.create({
  Screen: { paddingTop: 24, flex: 1 },
});

// AppRegistry.registerComponent("App", () => App);
registerRootComponent(App);
// export default App;
