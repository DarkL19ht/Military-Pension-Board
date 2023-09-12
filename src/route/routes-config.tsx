// import React from "react";
import { Navigate } from "react-router-dom";
import Login from "@/pages/authentication/login";
import Dashboard from "@/pages/dashboard";
import Profile from "@/pages/profile";
import RootLayout from "@/layouts/RootLayout";
import AdminUsers from "@/pages/admin-user";
import RolesManagement from "@/pages/role";
import PensionerTable from "@/pages/pensioner/pensioners-table";
import PensionerVerification from "@/pages/pensioner/pensioner-verification";
import AddPensioners from "@/pages/pensioner/onboard-pensioner";
import PensionersProfile from "@/pages/pensioner/pensioners-profile";
import ProtectedRoute from "./protected-route";
import PublicRoute from "./public-route";
import AddRole from "@/pages/role/create-role";
import RecoveryMail from "@/pages/authentication/forget-password";
import NewPassword from "@/@bin/new-password";

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
        path: "/recovery-mail",
        element: (
            <PublicRoute>
                <RecoveryMail />
            </PublicRoute>
        ),
    },
    {
        path: "/new-password",
        element: (
            <PublicRoute>
                <NewPassword />
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
                path: "pensioners",
                children: [
                    {
                        path: "view-lists",
                        element: <PensionerTable />,
                    },
                    {
                        path: "add-pensioners",
                        element: <AddPensioners />,
                    },
                    {
                        path: "profile",
                        element: <PensionersProfile />,
                    },
                    {
                        path: "verification",
                        element: <PensionerVerification />,
                    },
                ],
            },
            {
                path: "admin-management",
                children: [
                    {
                        index: true,
                        path: "",
                        element: <AdminUsers />,
                    },
                ],
            },
            {
                path: "roles-management",
                children: [
                    {
                        index: true,
                        path: "",
                        element: <RolesManagement />,
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
