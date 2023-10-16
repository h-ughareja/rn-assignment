import { View, Text, Pressable } from "react-native";
import { ApplicationStyles, Colors } from "../../theme";
import { GeneralHeader } from "../../components";
import { Strings } from "../../contants";
import styles from "./SettingStyles";
import { CaretDown, CaretUp, DownloadSimple, FileXls, Share } from "phosphor-react-native";
import { useExportData } from "../../hooks";
import { useState } from "react";

export const SettingScreen = () => {

    const { handleOnExport } = useExportData();
    const [open, setOpen] = useState(false);

    return (
        <View style={ApplicationStyles.screenContainer}>
            <GeneralHeader title={Strings.common.settings} />
            <View style={styles.mainContainer}>
                <Pressable style={styles.settingTab} onPress={() => setOpen(!open)}>
                    <View style={styles.settingTabContent}>
                        <FileXls size={25} color={Colors.black} />
                        <Text style={styles.settingTabText}>Export to Excel</Text>
                    </View>
                    <View>
                        {open ? 
                                <CaretUp size={20} />
                            :
                                <CaretDown size={20} />
                            }
                    </View>
                </Pressable>
                {open && (
                    <View style={styles.settingTabOptionsContainer}>
                        <Pressable style={styles.settingTabOption} onPress={() => {
                            handleOnExport("share");
                        }}>
                            <Share size={25} color={Colors.black} />
                            <Text style={styles.settingTabText}>Share file</Text>
                        </Pressable>
                        <Pressable style={styles.settingTabOption} onPress={() => {
                            handleOnExport("download");
                        }}>
                            <DownloadSimple size={25} color={Colors.black} />
                            <Text style={styles.settingTabText}>Download file</Text>
                        </Pressable>
                    </View>
                )}

            </View>
        </View>
    )
}
