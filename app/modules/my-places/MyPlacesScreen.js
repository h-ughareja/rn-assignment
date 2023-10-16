import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { ApplicationStyles, Colors } from '../../theme';
import { useSelector } from 'react-redux';
import { GeneralHeader } from '../../components';
import { NavigationRoutes, Strings } from '../../contants';
import styles from './MyPlacesStyles';
import { MapPin, Trash } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { useMyPlaces } from './useMyPlaces';
import { Images } from '../../assets';

export const MyPlacesScreen = () => {

    const {trackLists, deleteLocation} = useMyPlaces();
    const navigation = useNavigation();

    return (
        <View style={ApplicationStyles.screenContainer}>
            <GeneralHeader
                title={Strings.common.myPlaces}
            />
            <View style={styles.mainContainer}>
                <FlatList
                    data={trackLists}
                    renderItem={({ item, index }) => {
                        return <PlaceCard locationDetails={item} index={index} deleteLocation={deleteLocation} />
                    }}
                    ListEmptyComponent={() => {
                        return (
                            <View style={styles.emptyListContainer}>
                                <Image source={Images.locationList} style={{
                                    width: 200,
                                    height: 200,
                                }} />
                                <Text style={styles.emptyListText}>
                                    No location added yet
                                </Text>
                            </View>
                        )
                    }}
                />
            </View>
            {trackLists?.length > 0 && (
                <View style={styles.viewAllButtonContainer}>
                    <Pressable style={styles.viewAllButton} onPress={() => {
                        navigation.push(NavigationRoutes.ViewAllLocationScreen)
                    }}>
                        <Text style={styles.viewAllButtonText}>
                            {Strings.common.viewAllLocations}
                        </Text>
                    </Pressable>
                </View>
            )}
        </View>
    )
}

const PlaceCard = ({ locationDetails, index, deleteLocation }) => {

    const d = new Date(locationDetails?.timestamp);
    const navigation = useNavigation();

    return (
        <View style={styles.placeCard}>
            <View style={styles.placeCardTitleContainer}>
                <Text style={styles.placeCardTitle} numberOfLines={1}>
                    {locationDetails?.locationTitle}
                </Text>
                <Text style={styles.placeCardTimestamp}>
                    {`${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getFullYear()}`}
                </Text>
            </View>
            <Text style={styles.placeCardCoords}>
                <Text style={{ fontWeight: "500" }}>Latitude :&nbsp;</Text>
                <Text>{locationDetails?.location?.latitude}</Text>
            </Text>
            <Text style={styles.placeCardCoords}>
                <Text style={{ fontWeight: "500" }}>Longitude :&nbsp;</Text>
                <Text>{locationDetails?.location?.longitude}</Text>
            </Text>
            <View style={styles.placeCardButtonContainer}>
                <Pressable style={[styles.placeCardButton, styles.placeCardViewButton]} onPress={() => {
                    navigation.push(NavigationRoutes.ViewLocationScreen, {
                        "locationDetails": locationDetails
                    })
                }}>
                    <MapPin size={20} color={Colors.white} />
                    <Text style={styles.placeCardButtonText}>View in Maps</Text>
                </Pressable>
                <Pressable style={[styles.placeCardButton, styles.placeCardDeleteButton]} onPress={() => {
                    deleteLocation(index);
                }}>
                    <Trash size={20} color={Colors.red} />
                </Pressable>
            </View>
        </View>
    )
}