import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";

interface IParameters {
    onError?: (err: any) => void;
    onSuccess?: (res: any) => void;
}

interface RequestPayload {
    accountNo: string;
    bankCode: string;
    bvn: string;
    email: string;
    firstName: string;
    lastName: string;
    otherName: string;
    phone: string;
    rank: number;
    serviceNo: string;
}

export default function useCreatePensioner({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async (requestPayload: RequestPayload[]) => {
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
