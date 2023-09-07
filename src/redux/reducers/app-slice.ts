import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    isDarkMode: boolean;
}

interface IAction {
    hasDarkMode: boolean;
    email: string | null;
}

const initialState: IState = {
    isDarkMode: false,
    email: null,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<IAction>) => {
            state.isDarkMode = action.payload.hasDarkMode;
        },
        setEmail: (state, action: PayloadAction<IAction>) => {
            state.email = action.payload;
        },
    },
});

export const { setThemeMode, setEmail } = appSlice.actions;

export default appSlice.reducer;
