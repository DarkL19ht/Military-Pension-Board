import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesConfig from "./routes-config";

function RouteRenderer() {
    const router = createBrowserRouter(routesConfig);
    return <RouterProvider router={router} />;
}

export default RouteRenderer;

// import { useRoutes, BrowserRouter } from "react-router-dom";
// import routesConfig from "./routes-config";
// function Router() {
//     const routes = useRoutes(routesConfig);
//     return routes
// }

// function RouteRenderer() {
//     return (
//         <BrowserRouter>
//             <Router />
//         </BrowserRouter>
//     );
// }
