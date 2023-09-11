/* eslint-disable no-underscore-dangle */
import axios from "axios";
import jwtDecode from "jwt-decode";
import type { IAuthPayload } from "@/redux/reducers/auth-slice";
import appConfig from "@/config";
import { store } from "@/redux/store";
import { logout, setAuthenticationDetails } from "@/redux/reducers/auth-slice";

// const token = localStorage.getItem("mpb");

// PUBLIC HTTP client
export const HTTP = axios.create({
    baseURL: appConfig.baseURL,
    timeout: appConfig.httpTimeout,
});

// Authenticated HTTP client : for request that require accessToken
const AuthHTTP = axios.create({
    baseURL: appConfig.baseURL,
    timeout: appConfig.httpTimeout,
});

AuthHTTP.interceptors.request.use(
    async (config) => {
        const token = store.getState()?.authReducer?.accessToken;
        if (token !== null && token !== undefined && token) {
            config.headers.Authorization = token ? `Bearer ${token}` : "";
            return config;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// Function to refresh the access token
// eslint-disable-next-line consistent-return
const refreshAccessToken = async (): Promise<any> => {
    const refreshToken = store.getState()?.authReducer?.refreshToken;

    try {
        const res = await AuthHTTP.post("/refresh-token-endpoint", {
            // refreshToken: "YOUR_REFRESH_TOKEN",
            refreshToken,
        });

        return res?.data;
    } catch (error) {
        store.dispatch(logout());
        // Handle token refresh error (e.g., log the user out)
        // console.error("Token refresh failed:", error);
        // Redirect to the login page or perform other actions based on your app's requirements
    }
};

// Response interceptor to handle token expiration and refresh
AuthHTTP.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const { access_token: accessToken, refresh_token: refreshToken } =
                    await refreshAccessToken();
                const decodedToken = jwtDecode(accessToken);
                const sendToStore = {
                    decodedToken,
                    accessToken,
                    refreshToken,
                };
                store.dispatch(setAuthenticationDetails(sendToStore as IAuthPayload));
                AuthHTTP.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
                // Retry the original request with the new access token
                return await AuthHTTP(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default AuthHTTP;
