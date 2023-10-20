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
    },
    bgTrackingStatusContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
    },
    bgTrackingStatus: {
        margin: 10,
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bgTrackingStatusText: {
        color: Colors.black,
        textAlign: "center",
        marginLeft: 10,
    }
})

export default styles;
