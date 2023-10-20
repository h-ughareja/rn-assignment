import { useSelector } from "react-redux";
import { useCurrentLocation } from "../../hooks"

export const useHome = () => {

    const {location, mapRef} = useCurrentLocation();
    const {backgroundTrackingStatus} = useSelector(state => state.track);

    return {
        location,
        mapRef,
        backgroundTrackingStatus
    }
}
