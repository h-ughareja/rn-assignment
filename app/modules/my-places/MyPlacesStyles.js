import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    viewAllButtonContainer: {
        padding: 10,
    },
    viewAllButton: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    viewAllButtonText: {
        color: Colors.white,
        textAlign: "center",
        marginLeft: 10,
        fontSize: 15,
    },
    placeCard: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: Colors.lightgrey,
    },
    placeCardTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: Colors.black,
        flex: 1,
    },
    placeCardCoords: {
        color: Colors.grey,
    },
    placeCardTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },
    placeCardTimestamp: {
        marginLeft: 20,
        color: Colors.black,
    },
    placeCardButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        marginTop: 10,
        justifyContent: "space-between"
    },
    placeCardButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    placeCardViewButton: {
        backgroundColor: Colors.primary,
        borderRadius: 50,
    },
    placeCardButtonText: {
        color: Colors.white,
        marginLeft: 10,
    },
    placeCardDeleteButton: {
        borderWidth: 1,
        borderColor: Colors.red,
        borderRadius: 50,
    },
    emptyListContainer: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    emptyListText: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: "500",
        marginTop: 20,
    }
})

export default styles;
