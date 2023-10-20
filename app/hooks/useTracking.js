// import Geolocation from 'react-native-geolocation-service';


export const useTracking = () => {

    const [location, setLocation] = useState(null);

    return {
        location,
    }
}