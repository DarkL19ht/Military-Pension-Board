import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";

interface IParameters {
    onError?: (err: any) => void;
    onSuccess?: (res: any) => void;
}

type RequestPayload = {
    confirmPassword: string;
    oldPassword: string;
    password: string;
};

const useChangePassword = ({ onError, onSuccess }: IParameters = {}) => {
    const Mutation = useMutation({
        mutationFn: async ({
            requestPayload,
            id,
        }: {
            requestPayload: RequestPayload;
            id: number;
        }) => {
            try {
                const res = await AuthHTTP.post(
                    `/api/users/password/${id}`,
                    requestPayload
                );
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
        UpdatePassword: mutate,
        isChangingPassword: isLoading,
    };
};

export default useChangePassword;
