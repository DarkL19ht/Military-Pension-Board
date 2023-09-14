import { useState } from "react";
import {
    // FiSearch,
    FiBell,
} from "react-icons/fi";
// import { FaEnvelope } from "react-icons/fa";
import { FaUser, FaCog } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import profileImage from "@/assets/images/ib.png";
import { useTheme } from "@/providers/ThemeProvider";
import { MpbMenu, MenuButton, MenuItems, MenuItem } from "@/components";
import { useAuth } from "@/hooks";

function Header() {
    const { setTheme, theme } = useTheme();
    const [profileOpen, setProfileOpen] = useState(false);
    const { dispatch, logout, authState } = useAuth();

    return (
        <div
            // className="sticky top-0 shadow-lg
            className="bg-header flex h-[70px] min-w-max items-center
            justify-end px-[25px]"
        >
            {/* <div className="max-w-xs pl-3">
                <div>
                    <div className="group relative">
                        <input
                            type="text"
                            id="example9"
                            className="focus:border-primary-400 focus:ring-primary-200 block w-full rounded-md
                             border-gray-300 px-10 py-1 shadow-sm outline-none transition-all
                             hover:bg-gray-50"
                            placeholder="Quick search..."
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
                            <FiSearch size={20} />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="relativ flex items-center gap-[15px]">
                <div className="flex items-center gap-[25px] border-r pr-[25px]">
                    <FiBell />
                    <button
                        type="button"
                        className="text-lg"
                        onClick={
                            theme === "light"
                                ? () => setTheme("dark")
                                : () => setTheme("light")
                        }
                    >
                        {theme === "dark" ? (
                            <HiOutlineSun className="dark:text-light-heading mr-5" />
                        ) : (
                            <HiOutlineMoon className="text-blue-brand mr-5" />
                        )}
                    </button>
                </div>
                <div className="relative flex items-center gap-[15px]">
                    <div className="relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-green-700">
                        <img
                            src={profileImage}
                            className="h-12 w-12 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col ">
                        <h4 className="text-gray-600">
                            {authState?.user?.firstname}&nbsp;
                            {authState?.user?.lastname}
                        </h4>
                        <p className="text-sm  text-green-600">
                            {authState?.user?.roles?.[0]}
                        </p>
                    </div>
                    <MpbMenu>
                        <MenuButton onClick={() => setProfileOpen(!profileOpen)}>
                            <IoIosArrowDown
                                className={` ${
                                    profileOpen && "rotate-180"
                                } duration-200 `}
                            />
                        </MenuButton>
                        <MenuItems className="right-0 z-50 mt-2">
                            <MenuItem
                                onClick={() => {
                                    setProfileOpen(!profileOpen);
                                }}
                                className="flex items-center gap-5"
                            >
                                <FaUser className="mr-2" />
                                <span>Profile</span>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setProfileOpen(!profileOpen);
                                }}
                                className="flex items-center gap-5"
                            >
                                <FaCog />
                                <span>Settings</span>
                            </MenuItem>{" "}
                            <MenuItem
                                onClick={() => {
                                    setProfileOpen(!profileOpen);
                                    dispatch(logout());
                                }}
                                className="flex items-center gap-5"
                            >
                                <MdLogout />
                                <span>Logout</span>
                            </MenuItem>
                        </MenuItems>
                    </MpbMenu>
                </div>
            </div>
        </div>
    );
}

export default Header;
