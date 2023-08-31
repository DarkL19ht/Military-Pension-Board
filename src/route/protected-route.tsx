import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@/hooks/useRedux";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const isAuthenticated = useAppSelector(
        (state) => state?.authReducer?.isAuthenticated
    );

    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedRoute;
