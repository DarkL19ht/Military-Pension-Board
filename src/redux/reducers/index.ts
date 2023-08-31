/* eslint-disable import/no-extraneous-dependencies */
import { AnyAction, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import appReducer from "./app-slice";
import authReducer from "./auth-slice";
import type { RootState } from "../store";

const rootPersistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["authReducer", "appReducer"],
};

const baseReducer = combineReducers({
    appReducer,
    authReducer,
});

const rootReducer = (state: RootState, action: AnyAction) => {
    /**
     * when a logout action is dispatched it will reset redux state
     */
    if (action.type === "auth/logout") {
        storage.removeItem("persist:root");
        localStorage.removeItem("mpb");
        // localStorage.clear();
        window.location.href = "/";

        return baseReducer(undefined, action);
    }
    return baseReducer(state, action);
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
