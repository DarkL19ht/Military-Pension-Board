// import React from "react";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Profile from "@/pages/profile";
import RootLayout from "@/layouts/RootLayout";
import Pensioner from "@/pages/pensioner";
import AdminUsersTable from "@/pages/admin-user/admin-users-table";
import OnBoardPensioners from "@/pages/pensioner/onboard-pensioner";

const routeConfig = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "dashboard", index: true, element: <Dashboard /> },
            { path: "profile", element: <Profile /> },
            { path: "pensioners", element: <Pensioner /> },
            { path: "admin-users", element: <AdminUsersTable /> },
            { path: "onboard-pensioners", element: <OnBoardPensioners /> },
        ],
    },
];

export default routeConfig;
