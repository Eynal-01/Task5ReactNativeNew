import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
    position: "relative",
    marginTop: "6%",
    width: "90%",
    marginLeft: "4.7%",
    alignItems: "center", 
  },
  image1: {
    width: "98%",
    height: 280,
    borderRadius: 10,
    backgroundColor: "rgb(246, 246, 246)",
    marginBottom: 10,
  },
  title2: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 19,
    marginBottom: 5, 
    alignSelf: "flex-start",
    marginLeft: "1%",
  },
  content2: {
    width: "90%",
    marginLeft: "1%",
    fontWeight: "400",
    alignSelf: "flex-start",
  },
  minute2: {
    position: "static",
    alignItems: "flex-start",
    color: "rgb(189, 189, 189)",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: "1%",
    marginLeft: "1%",
  },
  circleContainer: {
    position: "static",
    width: 40,
    height: 8,
    alignSelf: "flex-end",
    marginTop: "5%",
    marginRight: "2%",
  },
  circle: {
    position: "absolute",
    width: 8,
    height: 8,
    backgroundColor: "rgb(93, 176, 117)",
    borderRadius: 100,
  },
  circle2: {
    position: "absolute",
    width: 8,
    height: 8,
    marginLeft: "40%",
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 100,
  },
  circle3: {
    position: "absolute",
    width: 8,
    height: 8,
    marginLeft: "80%",
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 100,
  }
});