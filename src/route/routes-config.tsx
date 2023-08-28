// import React from "react";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Profile from "@/pages/profile";
import RootLayout from "@/layouts/RootLayout";
import PensionerTable from "@/pages/pensioner/pensioners-table";
import AdminUsersTable from "@/pages/admin-user/admin-users-table";
import AddPensioners from "@/pages/pensioner/onboard-pensioner";

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
            { path: "settings", element: <Profile /> },
            {
                path: "manage-pensioners",
                children: [
                    {
                        path: "view-pensioners",
                        element: <PensionerTable />,
                    },
                    {
                        path: "add-pensioners",
                        element: <AddPensioners />,
                    },
                ],
            },
            {
                path: "admin-users",
                element: <AdminUsersTable />,
                children: [
                    {
                        path: "view-admin-user",
                    },
                    {
                        path: "create-admin-user",
                    },
                ],
            },
        ],
    },
];

export default routeConfig;
