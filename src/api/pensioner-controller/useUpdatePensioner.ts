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
    status: "ENABLED"; // TODO: change this to enum
    verificationStatus: "VERIFICATION_NOT_COMPLETED"; // TODO: confirm other verification status
}

export default function useCreatePensioner({ onError, onSuccess }: IParameters = {}) {
    const Mutation = useMutation({
        mutationFn: async ({
            requestPayload,
            id,
        }: {
            requestPayload: RequestPayload;
            id: number;
        }) => {
            try {
                const res = await AuthHTTP.post(`/api/pensioners/${id}`, requestPayload);
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
