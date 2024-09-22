import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerCont:{
        position:"absolute",
        width:"100%",
        height:270,
        backgroundColor:"rgb(93, 176, 117)"
      },
      wordCont:{
        position:"absolute",
        width:400,
        height:100,
        marginTop:30,
        margin:"auto",
        padding:10,
        marginLeft:15,
      },
      back: {
        position: "absolute",
        fontSize: 18,
        fontWeight: "500",
        color: "white",
        textAlign: "left",
        width: 70,
        height: 25,
        marginTop: 8,
      },
      feed: {
        position: "absolute",
        fontSize: 34,
        fontWeight: "600",
        textAlign: "center",
        width: 101,
        height: 50,
        left: "37%",
        color:"white",
      },
      filter: {
        marginTop: 8,
        position: "absolute",
        fontSize: 18,
        fontWeight: "500",
        color: "white",
        textAlign: "right",
        left: "82%",
        width: 60,
        height: 30,
      },
      imgCont: {
        borderRadius: 100,
        width: 170,
        height: 170,
        top: 110,
        margin: "auto",
        marginRight: 110,
        backgroundColor: "white",
        elevation: 10, 
       }
});