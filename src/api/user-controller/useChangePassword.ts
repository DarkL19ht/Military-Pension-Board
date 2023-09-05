import { useMutation } from "@tanstack/react-query";
import { HTTP } from "@/lib/httpClient";
import config from "@/config";
import { UserChangePassword as Payload } from "@/types/user";

type RequestPayload = {
    confirmPassword: string;
    oldPassword: string;
    password: string;
};

const useChangePassword = () => {
    const Mutation = useMutation({
        mutationFn: async ({
            requestPayload,
            id,
        }: {
            requestPayload: RequestPayload | Omit<Payload, "status"> | any;
            id: number;
        }) => {
            try {
                const res = await HTTP.post(`/api/users/password/${id}`, requestPayload, {
                    headers: {
                        Authorization: `Basic ${config.apiKey}`,
                        "Content-Type": "application/json",
                    },
                });
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    });

    const { mutate, isLoading } = Mutation;
    return {
        UpdatePassword: mutate,
        isChangingPassword: isLoading,
    };
};

export default useChangePassword;
