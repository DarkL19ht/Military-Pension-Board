import { useMutation } from "@tanstack/react-query";
import { HTTP } from "@/lib/httpClient";
import { UserRequestPayload as Payload } from "@/types";

interface IParameters {
    onError?: () => void;
    onSuccess?: () => void;
}

export default function useUpdateUser({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async ({
            requestPayload,
            id,
        }: {
            requestPayload: Payload;
            id: number;
        }) => {
            try {
                const res = await HTTP.put(`/api/user/${id}`, requestPayload);
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
        UpdateUser: mutate,
        isUpdatingUser: isLoading,
    };
}
