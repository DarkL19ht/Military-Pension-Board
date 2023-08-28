// import React from "react";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Profile from "@/pages/profile";
import RootLayout from "@/layouts/RootLayout";

const routeConfig = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "",
        element: <RootLayout />,
        children: [
            { path: "/dashboard", index: true, element: <Dashboard /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
];

export default routeConfig;
