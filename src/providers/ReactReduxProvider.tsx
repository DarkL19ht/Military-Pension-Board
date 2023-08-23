/* eslint-disable import/no-extraneous-dependencies */
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "@redux/store";

export const persistor = persistStore(store);

interface IProps {
    children: React.ReactNode; // Type for the children prop
}

export default function ReactReduxProvider({ children }: IProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
    );
}
