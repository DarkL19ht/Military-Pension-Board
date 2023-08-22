import routesConfig from "./routes-config";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const RouteRenderer = () => {
    const router = createBrowserRouter(routesConfig);
    return  <RouterProvider router={router} />
};

export default RouteRenderer;
 