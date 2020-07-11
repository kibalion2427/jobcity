import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
    // width: "100%",
    flex: 6,
    // height: "60%",
    backgroundColor: "#0061D7",
    // borderRadius: 4,
    // backgroundColor: "white",
    justifyContent: "center",
    // zIndex: -1,
  },
  textContainer: {
    flexDirection: "row",
    marginTop: -30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  h1: {
    padding: 20,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  airIcon: {
    position: "absolute",
    transform: [{ rotate: "90deg" }],
    right: "45%",
    bottom: 122,
    color: "white",
    // zIndex: 1,
  },
  navContainer: {
    flexDirection: "row",
    marginTop: 50,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "space-between",
  },
});
