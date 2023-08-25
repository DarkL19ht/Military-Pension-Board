import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

function RootLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full flex-1">
                {/* header goes her */}
                <Header />
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
