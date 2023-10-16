import { View, Text } from 'react-native';
import { ApplicationStyles, Colors } from '../../theme';
import { GeneralHeader } from '../../components';
import { useViewLocation } from './useViewLocation';
import styles from './ViewLocationStyles';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Strings } from '../../contants';

export const ViewLocationScreen = () => {

    const { locationDetails, origin, coords } = useViewLocation({type: "singleLocation"});

    return (
        <View style={ApplicationStyles.screenContainer}>
            <GeneralHeader title={locationDetails?.locationTitle ?? ""} />
            <View style={styles.mainContainer}>
                <MapView
                    initialRegion={origin}
                    style={{
                        flex: 1,
                    }}
                    provider={PROVIDER_GOOGLE}
                >
                    <Marker
                        coordinate={coords}
                        pinColor={Colors.red}
                        title={locationDetails?.locationTitle}
                    />
                </MapView>
            </View>
        </View>
    )
}
