import { useQuery } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";

interface IParameters {
    size?: number;
    pageNumber?: number;
}

export default function useGetUsers({ size, pageNumber }: IParameters = {}) {
    const result = useQuery({
        queryKey: [queryKeys.GET_USERS, { size, pageNumber }],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get("/api/users", {
                    params: {
                        size,
                        number: pageNumber,
                        // sort: true,
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
