import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import { useCallback } from "react";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";
import { IGetBankResponsePayload, IBankDataContent } from "@/types/bank";

interface IParameters {
    size?: number;
    pageNumber?: number;
}

// useQuery<<IApiResponse<IBanks>, Error>;

export default function useGetBanks({ size, pageNumber }: IParameters = {}) {
    const result = useQuery({
        queryKey: [queryKeys.GET_BANKS, { size, pageNumber }],
        queryFn: async (): Promise<IGetBankResponsePayload> => {
            try {
                const res = await AuthHTTP.get("/api/banks/", {
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
            return res?.data?.data?.content.map(({ name, code }: IBankDataContent) => ({
                value: code,
                label: _.startCase(_.toLower(name)), // capitalize first letter of each words
            }));
        }, []),
    });

    return result;
}
