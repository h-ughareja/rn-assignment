import { ActivityIndicator, Text, View } from "react-native"
import styles from "./LoaderStyles"
import { Colors } from "../../theme"

export const LargeLoader = () => {

    return (
        <View style={styles.largeLoaderContainer}>
            <ActivityIndicator size={40} color={Colors.white} />
            <Text style={{
                color: "white",
                marginLeft: 10,
                fontSize: 20,
                fontWeight: "500",
            }}>
                Please wait...
            </Text>
        </View>
    )
}