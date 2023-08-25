import React from "react";
import RouteRenderer from "./route/route-renderer";
import { ReactQueryProvider, ReactReduxProvider, ThemeProvider } from "./providers";

export default function App() {
    return (
        <ReactReduxProvider>
            <ReactQueryProvider>
                <ThemeProvider>
                    <RouteRenderer />
                </ThemeProvider>
            </ReactQueryProvider>
        </ReactReduxProvider>
    );
}
