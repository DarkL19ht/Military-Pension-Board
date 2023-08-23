/* eslint-disable import/no-extraneous-dependencies */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient();

interface IProps {
    children: React.ReactNode; // Type for the children prop
}

export default function ReactQuery({ children }: IProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools
                initialIsOpen={false}
                position="bottom-right"
                closeButtonProps={{ style: { right: 0, bottom: "0" } }}
            />
        </QueryClientProvider>
    );
}
