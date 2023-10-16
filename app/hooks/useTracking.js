// import Geolocation from 'react-native-geolocation-service';


export const useTracking = () => {

    const [location, setLocation] = useState(null);

    // const getLocation = () => {
    //     Geolocation.getCurrentPosition(
    //         (position) => {
    //             const { latitude, longitude } = position.coords;
    //             setLocation({ latitude, longitude });
    //         },
    //         (error) => console.log('Error getting location:', error),
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //     );
    // };

    // useEffect(() => {
    //     getLocation();
    // }, []);

    return {
        location,
    }
}