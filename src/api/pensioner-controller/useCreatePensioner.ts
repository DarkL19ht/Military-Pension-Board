import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import { IPensionerRequestPayload } from "@/types/pensioner";

interface IParameters {
    onError?: (err: any) => void;
    onSuccess?: (res: any) => void;
}

export default function useCreatePensioner({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async (requestPayload: IPensionerRequestPayload[]) => {
            try {
                const res = await AuthHTTP.post("/api/pensioners/", requestPayload);
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
        CreatePensioner: mutate,
        isCreatingPensioner: isLoading,
    };
}
