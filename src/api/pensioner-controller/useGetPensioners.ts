import { useQuery } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";
// import { IGetPensionerResponsePayload } from "@/types/pensioner";

// interface IParameters {
//     size?: number;
//     pageNumber?: number;
// }

interface IParameters {
    [key: string]: any;
}

export const getPensioners = async (requestParams: IParameters = {}) => {
    try {
        // const res = await AuthHTTP.get<IGetPensionerResponsePayload>(
        const res = await AuthHTTP.get("/api/pensioners", {
            params: {
                ...requestParams,
            },
        });
        return res?.data?.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export default function useGetPensioners(requestParams: IParameters = {}) {
    // const { data = [], isLoading } = useQuery({
    const result = useQuery({
        queryKey: [queryKeys.GET_PENSIONERS, requestParams],
        queryFn: () => getPensioners(requestParams),
        // keepPreviousData: true,
    });

    return result;
}
