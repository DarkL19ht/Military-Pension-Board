import { useQuery } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";

interface IParameters {
    size?: number;
    pageNumber?: number;
}

export default function useGetRanks({ size, pageNumber }: IParameters = {}) {
    const result = useQuery({
        queryKey: [queryKeys.GET_RANKS, { size, pageNumber }],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get("/api/ranks/", {
                    params: {
                        size,
                        number: pageNumber,
                    },
                });
                return res?.data?.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    });

    return result;
}
