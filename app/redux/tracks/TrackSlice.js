import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    "lastLocation": {
        "longitude": 0,
        "latitude": 0,
    },
    "trackLists": [],
    "backgroundTrackingStatus": false,
    "interval": 10000,
}

const TrackSlice = createSlice({
    name: "track",
    initialState: initialState,
    reducers: {
        addNewLocation: (state, action) => {
            state.trackLists = [action.payload.locationData, ...state.trackLists];
        },
        deleteLocation: (state, action) => {
            state.trackLists = state.trackLists.filter((_, index) => {
                return index != action.payload.index;
            })
        },
        updateBgServiceStatus: (state, action) => {
            state.backgroundTrackingStatus = !state.backgroundTrackingStatus;
        },
        updateInterval: (state, action) => {
            state.interval = action.payload.interval;
        },
        setCurrentLocation: (state, action) => {
            state.lastLocation = action.payload.location;
            state.trackLists = [{
                location: action.payload.location,
                locationTitle: "BG Tracked",
                timestamp: new Date().getTime(),
            }, ...state.trackLists];
        }
    },
})

export const TrackReducer = TrackSlice.reducer;
export const TrackActions = TrackSlice.actions;
