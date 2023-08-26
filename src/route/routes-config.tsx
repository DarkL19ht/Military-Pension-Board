// import React from "react";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard/Dashboard";
import ProfileSettings from "@/pages/profileSettings/ProfileSettings";
import RootLayout from "@/layouts/RootLayout";

const routeConfig = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "",
        element: <RootLayout />,
        children: [
            { path: "/", index: true, element: <Dashboard /> },
            { path: "/profile", element: <ProfileSettings /> },
        ],
    },
];

export default routeConfig;
