// import React from "react";
import { Navigate } from "react-router-dom";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Profile from "@/pages/profile";
import RootLayout from "@/layouts/RootLayout";
import AdminUsersTable from "@/pages/admin-user/admin-users-table";
import AddAdminUser from "@/pages/admin-user/create-admin-user";
import PensionerTable from "@/pages/pensioner/pensioners-table";
import AddPensioners from "@/pages/pensioner/onboard-pensioner";
import PensionersProfile from "@/pages/pensioner/pensioners-profile";
import ProtectedRoute from "./protected-route";
import PublicRoute from "./public-route";
import AddRole from "@/pages/role/create-role";

const routeConfig = [
    {
        path: "/",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <RootLayout />
            </ProtectedRoute>
        ),
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
                    {
                        path: "pensioners-profile",
                        element: <PensionersProfile />,
                    },
                ],
            },
            {
                path: "manage-admin",
                children: [
                    {
                        path: "view-admin-users",
                        element: <AdminUsersTable />,
                    },
                    {
                        path: "add-admin-users",
                        element: <AddAdminUser />,
                    },
                ],
            },
            {
                path: "manage-role",
                children: [
                    {
                        path: "create-role",
                        element: <AddRole />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
];

export default routeConfig;
