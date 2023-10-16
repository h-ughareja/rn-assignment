import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

const styles = StyleSheet.create({
    largeLoaderContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: Colors.modalBackground,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles;
