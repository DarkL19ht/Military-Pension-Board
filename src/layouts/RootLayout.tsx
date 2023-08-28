import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

function RootLayout() {
    return (
        // <div className="flex h-screen w-screen overflow-x-hidden">
        <div className="flex h-screen w-screen">
            <div>
                <Sidebar />
            </div>
            {/* TODO: fix the scroll issues */}
            {/* <main className="mx-auto overflow-y-scroll">  */}
            <main className="h-[100vh] w-full flex-1 overflow-y-scroll">
                {/* header goes here */}
                <div className="w-full shadow-lg">
                    <Header />
                </div>
                <div className="pt-3">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default RootLayout;
