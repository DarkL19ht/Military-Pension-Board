import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@/hooks/useRedux";

function PublicRoute({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const isAuthenticated = useAppSelector((state) => state.authReducer.isAuthenticated);

    return isAuthenticated ? (
        <Navigate to="/dashboard" state={{ from: location }} replace />
    ) : (
        children
    );
}

export default PublicRoute;
