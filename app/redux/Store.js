import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TrackReducer } from './tracks';

const reducers = combineReducers({
    track: TrackReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["track"]
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
    devTools: true,
})

export const persistor = persistStore(store);