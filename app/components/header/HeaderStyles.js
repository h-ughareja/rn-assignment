import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

const styles =  StyleSheet.create({
    mainHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    mainHeaderAppName: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 30,
        fontWeight: "700",
        color: Colors.black,
    },
    mainHeaderBar: {
        marginHorizontal: 20,
        color: Colors.black,
    },
    generalHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderBottomWidth: 1,
        borderColor: Colors.lightgrey,
    },
    generalHeaderTitle: {
        paddingHorizontal: 10,
        flex: 1,
        fontWeight: "500",
        fontSize: 20,
        color: Colors.black,
    },
    backButton: {
        padding: 15,
    }
});

export default styles;
