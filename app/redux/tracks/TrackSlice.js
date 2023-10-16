import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    "lastLocation": {
        "longitude": 0,
        "latitude": 0,
    },
    "trackLists": [],
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
        }
    },
})

export const TrackReducer = TrackSlice.reducer;
export const TrackActions = TrackSlice.actions;
