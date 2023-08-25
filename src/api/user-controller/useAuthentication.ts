import { useMutation } from "@tanstack/react-query";
import { HTTP } from "@/lib/httpClient";

interface IParameters {
    onError?: () => void;
    onSuccess?: () => void;
}

type Payload = {
    username: string;
    password: string;
};

const useAuthentication = ({ onError, onSuccess }: IParameters = {}) => {
    const Mutation = useMutation({
        mutationFn: async (requestPayload: Payload) => {
            try {
                const res = await HTTP.post("/oauth/token", requestPayload);
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        onError,
        onSuccess,
    });

    const { mutate, data, isLoading } = Mutation;
    return {
        LoginUser: mutate,
        isLoginUser: isLoading,
        changePasswordResponse: data,
    };
};

export default useAuthentication;
