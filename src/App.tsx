// import React from "react";
import RouteRenderer from "./route/route-renderer";
import { ReactQueryProvider, ReactReduxProvider, ThemeProvider } from "./providers";
import Toaster from "@/components/ui/toast/toaster";

export default function App() {
    return (
        <ReactReduxProvider>
            <ReactQueryProvider>
                <ThemeProvider>
                    <RouteRenderer />
                    <Toaster />
                </ThemeProvider>
            </ReactQueryProvider>
        </ReactReduxProvider>
    );
}
