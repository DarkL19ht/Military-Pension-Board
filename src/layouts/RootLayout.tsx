import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function RootLayout() {
    return (
        <div className="flex gap-5">
            <Sidebar />
            <main className="mx-auto max-w-5xl flex-1 py-4">
                {/* header goes her */}
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
