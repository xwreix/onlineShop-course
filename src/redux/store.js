import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "./userRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {applyMiddleware, createStore} from "redux";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

export default configureStore({
    reducer: {
        user: userReducer,
    },
    composeWithDevTools : (applyMiddleware())
});

const rootReducer = combineReducers({ user: userReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);