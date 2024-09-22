import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        margin: 12,
        position: "static",
    },
    imageContainer: {
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        width: 60,
        height: 60,
        marginRight: 1,
        marginTop: 15,
        position: "absolute",
    },
    topContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
        margin: 16,
        marginLeft: "20%",
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 19,
    },
    minute: {
        color: "rgb(189, 189, 189)",
    },
    content: {
        width: "73%",
        marginLeft: "20%",
        fontWeight: "400",
    },
    image3: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        margin: "auto",
    }
});