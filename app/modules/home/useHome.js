import { useCurrentLocation } from "../../hooks"

export const useHome = () => {

    const {location, mapRef} = useCurrentLocation();

    return {
        location,
        mapRef
    }
}
