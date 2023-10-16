import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

const styles = StyleSheet.create({
    mainContainer: {
        position: "relative",
        flex: 1,
    },
    saveButtonContainer: {
        padding: 10,
        position: "absolute",
        left: 0,
        width: "100%",
        bottom: 0,
    },
    saveButton: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    saveButtonText: {
        color: Colors.white,
        textAlign: "center",
        marginLeft: 10,
        fontSize: 15,
    }
})

export default styles;
