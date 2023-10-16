import { useEffect } from 'react';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';


export const usePermissions = () => {

    useEffect(() => {
        requestMultiple([PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]).then((statuses) => {
            console.log('L1', statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]);
            console.log('L2', statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]);
          });
    }, []);

    return {

    }
}