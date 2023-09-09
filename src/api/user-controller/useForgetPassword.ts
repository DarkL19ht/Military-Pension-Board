import { useMutation } from "@tanstack/react-query";
import { HTTP } from "@/lib";

interface IParameters {
    onError?: (err: any) => void;
    onSuccess?: (res: any) => void;
}

interface RequestPayload {
    email: string;
}

export default function useForgetPassword({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async (requestPayload: RequestPayload) => {
            try {
                const res = await HTTP.post("/apis/password/reset", requestPayload);
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        onError,
        onSuccess,
    });

    const { mutate, isLoading } = Mutation;
    return {
        initiateForgetPassword: mutate,
        isInitiatingForgetPassword: isLoading,
    };
}
