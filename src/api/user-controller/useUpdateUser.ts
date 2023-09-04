import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import { UserRequestPayload as Payload } from "@/types/user";

interface IParameters {
    onError?: (res: any) => void;
    onSuccess?: (err: any) => void;
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
                const res = await AuthHTTP.put(`/api/users/${id}`, requestPayload);
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
