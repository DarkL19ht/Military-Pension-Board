import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import { UserRequestPayload as Payload } from "@/types/user";

interface IParameters {
    onError?: (err: any) => void;
    onSuccess?: (res: any) => void;
}

export default function useCreateUser({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async (requestPayload: Omit<Payload, "status">) => {
            try {
                const res = await AuthHTTP.post("/api/users", requestPayload);
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
