import { View, Text } from 'react-native';
import { ApplicationStyles, Colors } from '../../theme';
import { GeneralHeader } from '../../components';
import { useViewLocation } from './useViewLocation';
import styles from './ViewLocationStyles';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Strings } from '../../contants';

export const ViewAllLocationScreen = () => {

    const { locations, origin } = useViewLocation({ type: "allLocations" });

    return (
        <View style={ApplicationStyles.screenContainer}>
            <GeneralHeader title={Strings.common.allPlaces} />
            <View style={styles.mainContainer}>
                <MapView
                    initialRegion={origin}
                    style={{
                        flex: 1,
                    }}
                    provider={PROVIDER_GOOGLE}
                >
                    {locations.map((location) => {
                        return (
                            <Marker
                                coordinate={location?.location}
                                pinColor={Colors.red}
                                title={location?.locationTitle}
                            />
                        )
                    })}
                </MapView>
            </View>
        </View>
    )
}
