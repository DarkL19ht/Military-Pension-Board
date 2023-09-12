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
import ForgetPassword from "@/pages/authentication/forget-password";

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
        path: "/forget-password",
        element: (
            <PublicRoute>
                <ForgetPassword />
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
                        index: true,
                        path: "",
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
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
];

export default routeConfig;
