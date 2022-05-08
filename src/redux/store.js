import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {applyMiddleware} from "redux";
import cartReducer from "./cartRedux";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
    composeWithDevTools : (applyMiddleware())
});

const rootReducer = combineReducers({ user: userReducer,  cart: cartReducer});

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