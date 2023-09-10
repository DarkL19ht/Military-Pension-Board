import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import { UserRequestPayload as Payload } from "@/types/user";
import { RequestMethod } from "@/types/enum";

interface IParameters {
    onError?: (res: any) => void;
    onSuccess?: (err: any) => void;
}

export default function useUpdateUser({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async ({
            requestPayload,
            id,
            requestMethod,
        }: {
            // TODO: remove any type and put the righ one
            requestPayload: Payload | Omit<Payload, "status"> | any;
            id: number;
            requestMethod: RequestMethod;
        }) => {
            try {
                let res: any;
                if (requestMethod === "POST") {
                    res = await AuthHTTP.post("/api/users", requestPayload);
                }
                if (requestMethod === "PUT") {
                    res = await AuthHTTP.put(`/api/users/${id}`, requestPayload);
                }
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
