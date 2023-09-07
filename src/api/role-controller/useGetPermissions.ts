import { useQuery } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";

interface IParameters {
    size?: number | undefined;
    pageNumber?: number | undefined;
}

export default function useGetPermissions({
    size = 1_000,
    pageNumber,
}: IParameters = {}) {
    const result = useQuery({
        queryKey: [queryKeys.GET_ROLES, { size, pageNumber }],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get("api/permissions", {
                    params: {
                        size,
                        number: pageNumber,
                        sort: true,
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
