import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";
import { IGetPermissionResponsePayload } from "@/types/permission";

interface IParameters {
    size?: number | undefined;
    pageNumber?: number | undefined;
}

export default function useGetPermissions(requestParameter: IParameters = {}) {
    const result = useQuery({
        queryKey: [queryKeys.GET_ROLES, requestParameter],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get<IGetPermissionResponsePayload>(
                    "api/permissions",
                    {
                        params: {
                            size: 1_000,
                            ...requestParameter,
                        },
                    }
                );
                return res;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        select: useCallback((res: any) => {
            return res?.data?.data?.content.map(
                ({ id, name }: { id: number; name: string }) => ({
                    value: id,
                    label: _.startCase(_.toLower(name)), // capitalize first letter of each words
                })
            );
        }, []),
    });

    return result;
}
