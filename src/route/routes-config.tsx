import Login from "@/pages/login/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import RootLayout from "@/layouts/RootLayout";
import Pensionerslist from "@/pages/pensioners/Pensionerslist";
import Roles from "@/pages/roles/Roles";

const routeConfig = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <RootLayout />,
        children: [{ path: "", index: true, element: <Dashboard /> }],
    },
    {
        path: "/pensioners",
        element: <RootLayout />,
        children: [{ path: "", index: true, element: <Pensionerslist /> }],
    },
    {
        path: "/roles",
        element: <RootLayout />,
        children: [{ path: "", index: true, element: <Roles /> }],
    },
];

export default routeConfig;
