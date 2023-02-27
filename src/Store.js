import { configureStore, combineReducers} from "@reduxjs/toolkit";

import userSlice from "./slice/userSlice";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { persistReducer } from "redux-persist";
const rootReducer = combineReducers({
  user: userSlice,
});


const persistConfig = {
    key: "root",
    storage: storage,
    //blacklist: [ "user"],
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const persistStorage = persistStore(store);






