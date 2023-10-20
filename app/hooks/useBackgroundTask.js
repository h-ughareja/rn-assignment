import { useEffect } from 'react';
import BackgroundService from 'react-native-background-actions';
import { useDispatch, useSelector } from 'react-redux';
import { TrackActions } from '../redux';
import Geolocation from '@react-native-community/geolocation';
import { Colors } from '../theme';

export const useBackgroundTask = () => {

    const {interval} = useSelector(state => state.track);
    const dispatch = useDispatch();

    const options = {
        taskName: 'Background Location Tracking',
        taskTitle: 'Tracking location',
        taskDesc: 'We are keeps you updated with your track.',
        taskIcon: {
            name: 'ic_launcher',
            type: 'mipmap',
        },
        color: Colors.primary,
        linkingURI: 'trackme://locations/tracking', 
        parameters: {
            delay: interval,
        },
    };

    const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

    const bgLocationtrackingTask = async (taskDataArguments) => {
        const { delay } = taskDataArguments;
        await new Promise(async (resolve) => {
            for (let i = 0; BackgroundService.isRunning(); i++) {
                try {
                    Geolocation.getCurrentPosition(
                        ({ coords }) => {
                            dispatch(TrackActions.setCurrentLocation({
                                location: {
                                    longitude: coords.longitude,
                                    latitude: coords.latitude
                                }
                            }))
                        },
                        (error) => console.log("Error : ", error),
                        { enableHighAccuracy: false, timeout: 15000 }
                    );
                }
                catch (err) {
                    console.log(err);
                }  
                await sleep(delay);
            }
        });
    };

    const startBackgroundService = async () => {
        dispatch(TrackActions.updateBgServiceStatus());
        await BackgroundService.start(bgLocationtrackingTask, options);
    }

    const stopBackgroundService = async () => {
        dispatch(TrackActions.updateBgServiceStatus());
        await BackgroundService.stop()
    }

    return {
        startBackgroundService,
        stopBackgroundService
    }
}
