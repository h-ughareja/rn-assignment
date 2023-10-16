import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
    },
    settingTab: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: Colors.lightgrey,
        marginBottom: 20,
        borderRadius: 10,
    },
    settingTabContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    settingTabText: {
        color: Colors.black,
        marginLeft: 20,
        fontWeight: "500",
    },
    settingTabOptionsContainer: {
        borderLeftWidth: 1,
        borderColor: Colors.lightgrey,
        paddingLeft: 20,
        marginLeft: 20,
        // paddingVertical: 20,
    },
    settingTabOption: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
    }
})

export default styles;
