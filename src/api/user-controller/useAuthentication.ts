import { useMutation } from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
import type { IAuthPayload } from "@/redux/reducers/auth-slice";
import { HTTP } from "@/lib/httpClient";
import config from "@/config";
import { setAuthTokenHTTP } from "@/lib/setAuthToken";
import useAuth from "@/hooks/useAuth";

type RequestPayload = {
    username: string;
    password: string;
    grant_type: string;
};

export interface ILogin {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    id: number;
    firstname: string;
    email: string;
    mobile: string;
    lastname: string;
    username: string;
    roles: string[];
    authorities: string[];
    jti: string;
}

const useAuthentication = () => {
    const { dispatch, setAuthenticationDetails } = useAuth();
    // FIXME: typescript issue with any and put the correct type definition
    const Mutation = useMutation<any, any, any>({
        mutationFn: async (requestPayload: RequestPayload) => {
            try {
                const res = await HTTP.post("/oauth/token", requestPayload, {
                    headers: {
                        Authorization: `Basic ${config.apiKey}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                });
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        onSuccess: (res) => {
            const { access_token: accessToken, refresh_token: refreshToken } = res.data;
            setAuthTokenHTTP(accessToken);
            const decodedToken = jwtDecode(accessToken);
            const sendToStore = {
                decodedToken,
                accessToken,
                refreshToken,
            };
            // localStorage.setItem("mpb", accessToken);
            dispatch(setAuthenticationDetails(sendToStore as IAuthPayload));
        },
    });

    const { mutate, error, isLoading, isError } = Mutation;

    return {
        LoginUser: mutate,
        isLoginUser: isLoading,
        loginErrorResponse: error?.response?.data,
        isError,
    };
};

export default useAuthentication;
