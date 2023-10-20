import { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { useBackgroundTask } from './useBackgroundTask';
import { useDispatch, useSelector } from 'react-redux';
import { TrackActions } from '../redux';
// import Geolocation from 'react-native-geolocation-service';


export const useCurrentLocation = () => {

    const {} = useBackgroundTask();
    const {lastLocation} = useSelector(state => state.track);

    const [location, setLocation] = useState(lastLocation);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    const getLocation = () => {
        try {
            Geolocation.watchPosition(
                ({ coords }) => {
                    setLocation({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    })
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

    const getCurrentLocation = async () => {
        try {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    dispatch(TrackActions.setCurrentLocation({
                        longitude: coords.longitude,
                        latitude: coords.latitude
                    }))
                },
                (error) => console.log("Error : ", error),
                { enableHighAccuracy: false, timeout: 15000 }
            );
        }
        catch (err) {
            console.log(err);
        }  
    }

    useEffect(() => {
        getLocation();
    }, []);

    return {
        location,
        mapRef,
        getCurrentLocation,
    }
}
