import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import _ from "lodash";
import { AuthHTTP } from "@/lib";
import queryKeys from "../queryKeys";
import { IGetRoleResponsePayload, IRoleDataContent } from "@/types/role";

interface IParameters {
    size?: number | undefined;
    page?: number | undefined;
}

export default function useGetRoles({ size = 1_000, page }: IParameters = {}) {
    const { data = [], isLoading } = useQuery({
        queryKey: [queryKeys.GET_ROLES, { size, page }],
        queryFn: async () => {
            try {
                const res = await AuthHTTP.get<IGetRoleResponsePayload>("/api/roles", {
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
        select: useCallback((res: any) => {
            return res?.data?.data?.content.map(
                ({ id, name }: Pick<IRoleDataContent, "id" | "name">) => ({
                    value: id,
                    label: _.startCase(_.toLower(name)), // capitalize first letter of each words
                })
            );
        }, []),
    });

    return {
        RoleResponse: data,
        isLoadingRole: isLoading,
    };
}
