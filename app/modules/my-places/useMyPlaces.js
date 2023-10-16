import {Alert} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Strings } from '../../contants';
import { TrackActions } from '../../redux';

export const useMyPlaces = () => {

    const { trackLists } = useSelector(state => state.track);
    const dispatch = useDispatch();

    const deleteLocation = (index) => {
        Alert.alert('', Strings.common.areYouSure, [{
            text: Strings.common.yes,
            onPress: () => {
                dispatch(TrackActions.deleteLocation({
                    index: index
                }))
            }
        }, {
            text: Strings.common.no,
        }])
    }

    return {
        trackLists,
        deleteLocation
    }
}
