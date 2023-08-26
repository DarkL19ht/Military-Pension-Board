import Login from "@/pages/login/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import RootLayout from "@/layouts/RootLayout";
import Table from "@/components/Table/Table";

const routeConfig = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <RootLayout />,
        children: [
            { path: "", index: true, element: <Dashboard /> },
            { path: "table", index: true, element: <Table /> },
        ],
    },
];

export default routeConfig;
