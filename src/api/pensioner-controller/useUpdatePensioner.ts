import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import { STATUS, VerificationStatus } from "@/types/enum";

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
    rankCode: string;
    serviceNo: string;
    status: STATUS | "";
    verificationStatus: VerificationStatus | "";
}

export default function useUpdatePensioner({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async ({
            requestPayload,
            id,
        }: {
            requestPayload: RequestPayload;
            id: number;
        }) => {
            try {
                const res = await AuthHTTP.put(`/api/pensioners/${id}`, requestPayload);
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
        UpdatePensioner: mutate,
        isupdatingPensioner: isLoading,
    };
}
