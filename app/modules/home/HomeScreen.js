import React from "react";
import { Pressable, Text, View } from "react-native";
import { ApplicationStyles, Colors } from "../../theme";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { LargeLoader, MainHeader } from "../../components";
import { useHome } from "./useHome";
import { NavigationRoutes, Strings } from "../../contants";
import styles from "./HomeScreenStyles";
import { Circle, ListPlus } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

    const ahmedabadRegion = {
        latitude: 23.0225,
        longitude: 72.5714,
        latitudeDelta: 1,
        longitudeDelta: 1,
    };

    const { location, mapRef, backgroundTrackingStatus } = useHome();

    const navigation = useNavigation();

    return (
        <View style={ApplicationStyles.screenContainer}>
            <MainHeader />
            <View style={styles.mainContainer}>
                {location?.latitude == 0 && location?.longitude == 0 && (
                    <LargeLoader />
                )}
                <MapView
                    ref={mapRef}
                    initialRegion={ahmedabadRegion}
                    style={{
                        flex: 1,
                    }}
                    provider={PROVIDER_GOOGLE}
                >
                    <Marker
                        coordinate={location}
                        pinColor={Colors.red}
                        title={Strings.common.currentLocation}
                    />
                </MapView>
                {(location?.latitude != 0 || location?.longitude != 0) && (
                    <View style={styles.saveButtonContainer}>
                        <Pressable style={styles.saveButton} onPress={() => {
                            navigation.push(NavigationRoutes.AddLocationScreen, {
                                "location": location,
                            })
                        }}>
                            <ListPlus size={20} color={Colors.white} />
                            <Text style={styles.saveButtonText}>
                                {Strings.common.addToMyPlaces}
                            </Text>
                        </Pressable>
                    </View>
                )}
                <View style={styles.bgTrackingStatusContainer}>
                    <View style={styles.bgTrackingStatus}>
                        <Circle size={25} weight="fill" color={backgroundTrackingStatus ? Colors.green : Colors.red} />
                        <Text style={styles.bgTrackingStatusText} numberOfLines={1}>
                            Background location tracking is {backgroundTrackingStatus ? "enabled" : "disabled"}.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}