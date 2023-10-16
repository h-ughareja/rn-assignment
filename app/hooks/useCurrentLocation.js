import { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';


export const useCurrentLocation = () => {

    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    const mapRef = useRef(null);

    const getLocation = () => {
        try {
            Geolocation.watchPosition(
                ({ coords }) => {
                    setLocation({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    })
                    console.log(mapRef?.current);
                    mapRef?.current?.animateToRegion({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        latitudeDelta: 0.08,
                        longitudeDelta: 0.08,
                    }, 1000)
                },
                (error) => console.log("Error : ", error),
                { enableHighAccuracy: false, timeout: 15000, interval: 10000, distanceFilter: 10 }
            );
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return {
        location,
        mapRef
    }
}