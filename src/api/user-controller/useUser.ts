import { useQuery } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";

interface IParameters {
    size?: number;
    page?: number;
}
export default function useUser({ size, page }: IParameters = {}) {
    return useQuery({
        queryKey: [queryKeys.GET_USERS, size, page],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get("/api/user", {
                    params: {
                        size,
                        number: page,
                    },
                });
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
    });
}
