import { useMutation } from "@tanstack/react-query";
import { HTTP } from "@/lib/httpClient";
import { UserRequestPayload as Payload } from "@/types";

interface IParameters {
    onError?: () => void;
    onSuccess?: () => void;
}

export default function useCreateUser({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async (requestPayload: Payload) => {
            try {
                const res = await HTTP.post("/api/user", requestPayload);
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
        CreateUser: mutate,
        isCreatingUser: isLoading,
    };
}
