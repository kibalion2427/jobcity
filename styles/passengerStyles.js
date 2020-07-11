import { StyleSheet } from "react-native";

export default StyleSheet.create({
  passengerText: {
    color: "#424242",
    fontWeight: "bold",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "relative",
    flex: 9,
    width: "90%",
    backgroundColor: "white",
    // borderColor: "black",
    // borderStyle: "solid",
    // borderWidth: 1,
    top: -60,
    margin: 20,
    borderRadius: 10,

    //BOX SHADOW
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  passengerDetailsContainer: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
    // backgroundColor: "cyan",
  },
  passengerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "green",
  },
  addonButton: {
    backgroundColor: "#0061D7",
    width: 150,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  //TICKET

  ticketDetails: {
    flexDirection: "column",
    flex: 3,
    padding: 5,
    // alignItems:"center"
    // backgroundColor: "yellow",
  },
  th: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "space-between",
    // backgroundColor: "yellow",
    alignItems: "center",
  },
  tb: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "space-between",
    // backgroundColor: "red",
    alignItems: "center",
  },

  thText: {
    color: "#ABABAB",
    textAlign: "center",
    fontWeight: "bold",
    flex: 1,
  },

  tbText: {
    textAlign: "center",
    flex: 1,
    fontWeight: "bold",
  },
});
