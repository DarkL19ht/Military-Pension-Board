import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesConfig from "./routes-config";

function RouteRenderer() {
    const router = createBrowserRouter(routesConfig);
    return <RouterProvider router={router} />;
}

export default RouteRenderer;
