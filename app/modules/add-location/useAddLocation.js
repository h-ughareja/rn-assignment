import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Strings } from "../../contants";
import {useDispatch} from 'react-redux';
import { TrackActions } from "../../redux";

export const useAddLocation = () => {

    const {params} = useRoute();
    const navigation = useNavigation();

    const [locationTitle, setLocationTitle] = useState('');
    const [showReq, setShowReq] = useState(false);
    const dispatch = useDispatch();

    const handleOnAdd = () => {
        if(locationTitle.trim().length == 0) {
            setShowReq(true);
        }
        else {
            // Add
            dispatch(TrackActions.addNewLocation({
                locationData: {
                    "location": params?.location,
                    "locationTitle": locationTitle,
                    "timestamp": new Date().getTime(),
                }
            }))
            Alert.alert(Strings.common.locationAdded, Strings.common.locationAddedInstruction, [{
                text: Strings.common.goBack,
                onPress: () => {
                    navigation.goBack();
                }
            }]);
        }
    }

    return {
        handleOnAdd,
        showReq,
        locationTitle,
        setLocationTitle
    }
}
