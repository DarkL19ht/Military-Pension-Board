import { useMutation } from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
import type { IAuthPayload } from "@redux/reducers/auth-slice";
import { HTTP } from "@/lib/httpClient";
import config from "@/config";
import { setAuthTokenHTTP } from "@/lib/setAuthToken";
import useAuth from "@/hooks/useAuth";

type RequestPayload = {
    username: string;
    password: string;
    grant_type: string;
};

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
            const { access_token: accessToken } = res.data;
            setAuthTokenHTTP(accessToken);
            const decodedToken = jwtDecode(accessToken);
            const sendToStore = {
                decodedToken,
                accessToken,
            };
            localStorage.setItem("mpb", accessToken);
            dispatch(setAuthenticationDetails(sendToStore as IAuthPayload));
        },
    });

    const { mutate, error, isLoading } = Mutation;

    return {
        LoginUser: mutate,
        isLoginUser: isLoading,
        loginErrorResponse: error?.response?.data,
    };
};

export default useAuthentication;
