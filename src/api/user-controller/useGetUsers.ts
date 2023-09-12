import { useQuery } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";

// interface IParameters {
//     size?: number;
//     pageNumber?: number;
// }

interface IParameters {
    [key: string]: any;
}

export default function useGetUsers(requestParams: IParameters = {}) {
    const result = useQuery({
        queryKey: [queryKeys.GET_USERS, { ...requestParams }],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get("/api/users", {
                    params: {
                        sort: false,
                        sortBy: "id",
                        ...requestParams,
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
