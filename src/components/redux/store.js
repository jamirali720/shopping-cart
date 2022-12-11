import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice";

const persistConfig = {
    key: 'root', 
    version: 1,
    storage
}
const reducer = combineReducers({
    cart: cartSlice, 
})
const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({    
      serializableCheck: false,
    }),
})

export default store;