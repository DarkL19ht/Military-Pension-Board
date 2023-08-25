import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IState {
    isAuthenticated: boolean;
    accessToken: string | null;
}

interface IAction {
    isAdmin: boolean;
}

const initialState = {
    isAuthenticated: false,
    accessToken: null,
} satisfies IState as IState;

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IAction>) => {
            state.isAuthenticated = action.payload.isAdmin;
        },
    },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
