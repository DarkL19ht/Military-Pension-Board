import { useQuery } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";

interface IParameters {
    [key: string]: any;
}

export default function useGetRoles(requestParameter: IParameters = {}) {
    const result = useQuery({
        queryKey: [queryKeys.GET_ROLES, requestParameter],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get("/api/roles", {
                    params: {
                        sort: false,
                        sortBy: "id",
                        ...requestParameter,
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
