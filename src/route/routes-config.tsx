// import React from "react";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard/Dashboard";
import RootLayout from "@/layouts/RootLayout";

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
];

export default routeConfig;
