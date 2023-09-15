import { useQuery } from "@tanstack/react-query";
import queryKeys from "../queryKeys";
import { AuthHTTP } from "@/lib";

const profileDetailQuery = (id: string | number) => ({
    queryKey: [queryKeys.GET_PENSIONER, id],
    queryFn: async () => {
        const res = await AuthHTTP.get(`/api/pensioners?id=${id}`);
        return res?.data?.data;
    },
});

export const pensionerProfileLoader =
    (queryClient: any) =>
    async ({ params }: { params: any }) => {
        const id = params?.id;
        const query = profileDetailQuery(id);
        // ⬇️ return data or fetch it
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        );
    };

const useGetPensionerById = (id: string | number) => {
    const { data } = useQuery(profileDetailQuery(id));
    return data;
};

export default useGetPensionerById;
