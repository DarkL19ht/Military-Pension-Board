import Login from "@/pages/login/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import RootLayout from "@/layouts/RootLayout";
import Transaction from "@/pages/transactions/Transaction";

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
        path: "/transactions",
        element: <RootLayout />,
        children: [{ path: "", index: true, element: <Transaction /> }],
    },
];

export default routeConfig;
