import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IDecodedToken } from "@/types";

export interface IAuthPayload {
    decodedToken: IDecodedToken;
    accessToken: string;
}

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    user: {},
} satisfies IAuthState as IAuthState;

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.accessToken = null;
            state.user = {};
        },
        setAuthenticationDetails: (state, action: PayloadAction<IAuthPayload>) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.decodedToken;
        },
    },
});

export const { logout, setAuthenticationDetails } = authSlice.actions;

export default authSlice.reducer;
