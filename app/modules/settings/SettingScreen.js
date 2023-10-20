import { View, Text, Pressable, Switch } from "react-native";
import { ApplicationStyles, Colors } from "../../theme";
import { GeneralHeader } from "../../components";
import { Strings } from "../../contants";
import styles from "./SettingStyles";
import { CaretDown, CaretUp, Check, Clock, DownloadSimple, FileXls, Path, Share } from "phosphor-react-native";
import { useBackgroundTask, useExportData } from "../../hooks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrackActions } from "../../redux";

export const SettingScreen = () => {

    const { handleOnExport } = useExportData();
    const [open, setOpen] = useState(false);
    const { interval, backgroundTrackingStatus } = useSelector(state => state.track);
    const dispatch = useDispatch();
    const [viewIntervalOptions, setViewIntervalOptions] = useState(false);
    const {startBackgroundService, stopBackgroundService} = useBackgroundTask();

    const intervalOptions = [
        { "title": "10 Seconds", "value": 10000 },
        { "title": "30 Seconds", "value": 30000 },
        { "title": "1 Minute", "value": 60000 },
        { "title": "5 Minutes", "value": 300000 },
        { "title": "30 Minutes", "value": 1800000 },
        { "title": "1 Hour", "value": 3600000 },
    ]

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

                <Pressable style={styles.settingTab} onPress={() => {
                    dispatch(TrackActions.updateBgServiceStatus());
                }}>
                    <View style={styles.settingTabContent}>
                        <Path size={25} color={Colors.black} />
                        <Text style={styles.settingTabText}>Background Tracking</Text>
                    </View>
                    <View>
                        <Switch
                            trackColor={{ false: Colors.black, true: Colors.black }}
                            thumbColor={true ? Colors.primary : Colors.grey}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                if(backgroundTrackingStatus) stopBackgroundService();
                                else startBackgroundService();
                            }}
                            value={backgroundTrackingStatus}
                        />
                    </View>
                </Pressable>

                <Pressable style={styles.settingTab} onPress={() => setViewIntervalOptions(!viewIntervalOptions)}>
                    <View style={styles.settingTabContent}>
                        <Clock size={25} color={Colors.black} />
                        <Text style={styles.settingTabText}>Interval</Text>
                    </View>
                    <View>
                        {viewIntervalOptions ?
                            <CaretUp size={20} />
                            :
                            <CaretDown size={20} />
                        }
                    </View>
                </Pressable>
                {viewIntervalOptions && (
                    <View style={styles.settingTabOptionsContainer}>
                        {intervalOptions.map((option) => {
                            return (
                                <Pressable style={styles.settingTabOption} onPress={() => {
                                    dispatch(TrackActions.updateInterval({
                                        interval: option.value,
                                    }))
                                }}>
                                    <View style={{
                                        width: 25,
                                    }}>
                                        {interval === option?.value && (
                                            <Check size={20} color={Colors.green} />
                                        )}
                                    </View>

                                    <Text style={styles.settingTabText}>{option.title}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                )}

            </View>
        </View>
    )
}
