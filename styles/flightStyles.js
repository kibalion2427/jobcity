import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    position: "relative",
    flex: 5,
    width: "90%",
    backgroundColor: "white",
    top: -50,
    margin: 20,
    borderRadius: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",
    //BOX SHADOW
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  depart: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 100,
  },
  flight: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 110,
    // backgroundColor: "black",
  },
  arrive: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 100,
  },

  hourContainer: {
    // backgroundColor: "black",
  },
  dateContainer: {
    // backgroundColor: "black",
    flexWrap: "nowrap",
  },
  // LOGO
  logo: {
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",
    marginTop: 10,
    alignItems: "center",
  },
  temporizer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
  },
  flightTextContainer: {
    // backgroundColor: "black",
    flexWrap: "nowrap",
  },

  departText: {
    color: "#A0A0A0",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 18,
  },
  hourText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 30,
  },
  hourStopText: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  flightNumber: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 30,
    textAlign: "center",
    color: "#8B8B8B",
  },
  arriveText: {
    color: "#A0A0A0",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "right",
    fontSize: 18,
  },
  hourArriveText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "right",
  },
  dateArriveText: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 30,
    textAlign: "right",
  },
});
