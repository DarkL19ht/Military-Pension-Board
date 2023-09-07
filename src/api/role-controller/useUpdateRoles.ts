import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import { IRoleRequestPayload as Payload } from "@/types/role";
import { RequestMethod } from "@/types/enum";

interface IParameters {
    onError?: (res: any) => void;
    onSuccess?: (err: any) => void;
}

export default function useUpdateRoles({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async ({
            requestPayload,
            id,
            requestMethod,
        }: {
            requestPayload: Payload | Omit<Payload, "status"> | any; // TODO: remove any type and put the righ one
            id: number;
            requestMethod: RequestMethod;
        }) => {
            try {
                let res: any;
                if (requestMethod === "POST") {
                    res = await AuthHTTP.post("/api/roles", requestPayload);
                }
                if (requestMethod === "PUT") {
                    res = await AuthHTTP.put(`/api/roles/${id}`, requestPayload);
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
        UpdateRole: mutate,
        isUpdatingRole: isLoading,
    };
}
