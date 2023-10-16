import { useRoute } from "@react-navigation/native"
import { useSelector } from "react-redux";

export const useViewLocation = ({
    type
}) => {

    const { params } = useRoute();
    const {trackLists} = useSelector(state => state.track);

    if (type == "singleLocation") {
        const { location: locationDetails } = params?.locationDetails;

        return {
            locationDetails: params?.locationDetails,
            origin: {
                longitude: locationDetails?.longitude,
                latitude: locationDetails?.latitude,
                latitudeDelta: 0.08,
                longitudeDelta: 0.08,
            },
            coords: {
                longitude: locationDetails?.longitude,
                latitude: locationDetails?.latitude,
            }
        }
    }
    else {
        return {
            "locations": trackLists,
            origin: {
                ...trackLists[0]?.location,
                latitudeDelta: 0.08,
                longitudeDelta: 0.08,
            }
        }
    }
}
