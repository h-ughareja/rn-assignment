import { StyleSheet } from "react-native";
import { Colors } from "../theme";

const styles = StyleSheet.create({
    tabNavTab: {
        flexDirection: "column",
        alignItems: "center",
    },
    tabNavTabName: {
        color: Colors.black
    },
    tabNavTabNameActive: {
        color: Colors.primary
    },
    drawerStyle: {
        width: "80%",
    },
    tabBarContainer: {
        backgroundColor: Colors.white,
        paddingTop: 5,
        height: 55
    }
});

export default styles;
