import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import { useCallback } from "react";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";
import { IGetRankResponsePayload, IRankDataContent } from "@/types/rank";

interface IParameters {
    size?: number;
    pageNumber?: number;
}

export default function useGetRanks({ size, pageNumber }: IParameters = {}) {
    const result = useQuery({
        queryKey: [queryKeys.GET_RANKS, { size, pageNumber }],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get<IGetRankResponsePayload>("/api/ranks/", {
                    params: {
                        size,
                        number: pageNumber,
                    },
                });
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        select: useCallback((res: any) => {
            // console.log(res.data.data)
            return res?.data?.data?.content?.map(({ code, name }: IRankDataContent) => ({
                value: code,
                label: _.startCase(_.toLower(name)), // capitalize first letter of each words
            }));
        }, []),
    });

    return result;
}
