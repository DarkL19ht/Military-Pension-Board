import { useQuery } from "@tanstack/react-query";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";
import { IApiResponse } from "@/types";
import { IRankResponsePayload } from "@/types/rank";

interface IParameters {
    size?: number;
    pageNumber?: number;
}

export default function useGetRanks({ size, pageNumber }: IParameters = {}) {
    const result = useQuery<IApiResponse<IRankResponsePayload>, Error>({
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
        select: useCallback((res: any) => {
            return res?.data?.data?.content.map(
                ({ id, name }: Pick<IBankResponsePayload, "id" | "name">) => ({
                    value: id,
                    label: _.startCase(_.toLower(name)), // capitalize first letter of each words
                })
            );
        }, []),
    });

    return result;
}
