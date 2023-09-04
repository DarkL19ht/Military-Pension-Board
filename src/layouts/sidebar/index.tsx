/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { Users, Cog, LogOut } from "lucide-react";
// import { AiOutlineAppstore } from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
// import { HiOutlineDatabase } from "react-icons/hi";
// import { RiBuilding3Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
import Logo from "@/assets/images/logo.png";
import SubMenu from "./SubMenu";

const subMenusList = [
    {
        name: "Manage Pensioners",
        icon: TbReportAnalytics,
        menus: [
            {
                name: "Add Pensioners",
                path: "",
            },
            {
                name: "View Pensioners",
                path: "",
            },
            {
                name: "Pensioner's Profile",
                path: "",
            },
        ],
    },
    {
        name: "Manage Role",
        icon: TbReportAnalytics,
        menus: [
            {
                name: "Create Role",
                path: "",
            },
        ],
    },
];

function Sidebar() {
    const isTabletMid: boolean = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(!isTabletMid);
    const { pathname } = useLocation();
    // const sidebarRef = useRef();

    /**
     * pathname change -> close sidebar (only mobile view)
     */
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isTabletMid && setOpen(false);
    }, [pathname, isTabletMid]);

    const sidebarAnimation = isTabletMid
        ? {
              // mobile view
              open: {
                  x: 0,
                  width: "12rem",
                  transition: {
                      damping: 40,
                  },
              },
              closed: {
                  x: -250,
                  width: 0,
                  transition: {
                      damping: 40,
                      delay: 0.15,
                  },
              },
          }
        : {
              // system view
              open: {
                  width: "16rem", // controls the width of the sidebar when open
                  transition: {
                      damping: 40,
                  },
              },
              closed: {
                  width: "4rem", // controls the width of the sidebar when close
                  transition: {
                      damping: 40,
                  },
              },
          };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            setOpen(!open);
        }
    };

    return (
        <div>
            <div
                role="button"
                tabIndex={-1}
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-[998] max-h-screen bg-black/50 md:hidden ${
                    open ? "block" : "hidden"
                } `}
            />
            <motion.div
                variants={sidebarAnimation}
                // ref={sidebarRef}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className="text-gray fixed z-[999] h-screen w-[12rem]  max-w-[16rem] 
                overflow-hidden bg-sidebar-surface shadow-xl md:relative"
            >
                {/* logo */}
                <Link
                    to="/login"
                    className="mx-3 mt-2 flex items-center justify-center gap-2.5 border-b border-slate-300 py-3 font-medium"
                >
                    <img src={Logo} alt="mpb logo" width={30} />
                    {/* <span className="text-xl whitespace-pre">MPB</span> */}
                </Link>
                {/* Menus */}
                <div className="flex h-full flex-col">
                    <ul
                        className="flex h-[70%] flex-col gap-4 overflow-x-hidden 
                        whitespace-pre px-2.5 py-5 
                        text-[0.9rem] font-medium scrollbar-thin scrollbar-track-white  scrollbar-thumb-slate-100 md:h-[80%]"
                    >
                        <li>
                            <NavLink to="dashboard" className="link">
                                <HiOutlineHome size={20} className="min-w-max" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>

                        {/* Menu with submenu */}
                        {open && (
                            <div>
                                {/* <div className="border border-slate-300 py-5"> */}
                                {/* <small className="mb-2 inline-block pl-3 text-slate-500">Product Categories</small> */}
                                {subMenusList?.map((menu) => (
                                    <div key={menu.name} className="flex flex-col gap-1">
                                        <SubMenu data={menu} />
                                    </div>
                                ))}
                            </div>
                        )}
                        <li>
                            <NavLink to="/" className="link">
                                <Cog size={20} className="min-w-max" />
                                Role Management
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="admin-management" className="link">
                                {/* <SlSettings size={23} className="min-w-max" /> */}
                                <Users size={20} className="min-w-max" />
                                Admin Management
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className="link">
                                <Cog size={20} className="min-w-max" />
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                    {/* second  */}
                    {(open || isTabletMid) && (
                        <div className="z-50 my-auto max-h-48  w-full flex-1 whitespace-pre text-sm font-medium ">
                            <div className="flex items-center justify-center border-y border-slate-300 p-4">
                                {/* <div>
                                    <p>Spark</p>
                                    <small>No-cost $0/month</small>
                                </div> */}
                                <button className="link active rounded-lg bg-teal-50 px-10 py-3 text-sm text-teal-500">
                                    <LogOut />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* control button */}
                <motion.div
                    animate={
                        open
                            ? {
                                  x: 0,
                                  y: 0,
                                  rotate: 0,
                              }
                            : {
                                  x: -10,
                                  y: -200,
                                  rotate: 180,
                              }
                    }
                    transition={{
                        duration: 0,
                    }}
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpen(!open)}
                    onKeyDown={handleKeyPress}
                    className="absolute bottom-[8rem] right-2 z-50 hidden h-fit w-fit cursor-pointer md:block"
                >
                    <IoIosArrowBack size={25} />
                </motion.div>
            </motion.div>
            <button
                type="button"
                className="m-3 mt-4 md:hidden"
                onClick={() => setOpen(true)}
            >
                <MdMenu size={25} />
            </button>
        </div>
    );
}

export default Sidebar;
