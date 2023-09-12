import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    isDarkMode: boolean;
}

interface IAction {
    hasDarkMode: boolean;
}

const initialState: IState = {
    isDarkMode: false,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<IAction>) => {
            state.isDarkMode = action.payload.hasDarkMode;
        },
    },
});

export const { setThemeMode } = appSlice.actions;

export default appSlice.reducer;
