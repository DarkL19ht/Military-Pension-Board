import React from "react";
import Login from "@/pages/login/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import ProfileSettings from "@/pages/profileSettings/ProfileSettings";
import RootLayout from "@/layouts/RootLayout";

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
            { path: "", index: true, element: <ProfileSettings /> },
        ],
    },
];

export default routeConfig;
