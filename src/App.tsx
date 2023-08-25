import RouteRenderer from "./route/route-renderer";
import { ReactQueryProvider, ReactReduxProvider } from "./providers";

export default function App() {
    return (
        <ReactReduxProvider>
            <ReactQueryProvider>
                <RouteRenderer />
            </ReactQueryProvider>
        </ReactReduxProvider>
    );
}
