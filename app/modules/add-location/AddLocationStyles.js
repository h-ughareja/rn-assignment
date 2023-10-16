import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
    },
    inputTitleText: {
        color: Colors.black,
        fontWeight: "500",
        marginHorizontal: 10,
    },
    inputField: {
        color: Colors.black,
        backgroundColor: "#f0f0f0",
        marginTop: 10,
        borderRadius: 5,
        padding: 15,
    },
    addButton: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    addButtonText: {
        color: Colors.white,
        textAlign: "center",
        marginLeft: 10,
        fontSize: 15,
    },
    addButtonContainer: {
        marginTop: 20,
    },
    instructionText: {
        color: Colors.red,
        fontSize: 13,
        marginHorizontal: 15,
        marginTop: 5,
    }
})

export default styles;
