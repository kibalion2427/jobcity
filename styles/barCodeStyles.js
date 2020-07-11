import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    // borderRadius: 10,
    flexDirection: "column",
    // borderTopColor: "black",
    // borderStyle: "dotted",
    // borderTopWidth: 1,
    flex: 1,
    margin: 10,
    marginTop: 10,
    paddingTop: 10,
  },
  bar: {
    flex: 1,
    backgroundColor: "transparent",
    // color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 5,
    // borderColor: "blue",
    // borderStyle: "solid",
    // borderWidth: 1,
  },
  barCodeText: {
    color: "#424242",
    fontWeight: "bold",
  },
  barCodeImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    // borderWidth: 1,
    // borderColor: "red",
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
});
