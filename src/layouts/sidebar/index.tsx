import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// * React icons
import { IoIosArrowBack } from "react-icons/io";
// import { SlSettings } from "react-icons/sl";
// import { AiOutlineAppstore } from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
// import { HiOutlineDatabase } from "react-icons/hi";
// import { TbReportAnalytics } from "react-icons/tb";
// import { RiBuilding3Line } from "react-icons/ri";
// import { MdMenu } from "react-icons/md";
import Logo from "@/assets/logo.png";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const sidebarAnimation = {
        open: {
            width: "12rem",
            transition: {
                damping: 40,
            },
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40,
            },
        },
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div>
            <motion.div
                variants={sidebarAnimation}
                animate={isOpen ? "open" : "closed"}
                className="text-gray fixed z-[999] h-screen w-[12rem]  max-w-[16rem] 
                overflow-hidden bg-white shadow-xl md:relative"
            >
                {/* logo */}
                <div className="mx-3 mt-2 flex items-center gap-2.5 border-b border-slate-300 py-3 font-medium">
                    <img src={Logo} alt="mpb logo" width={30} />
                    {/* <span className="text-xl whitespace-pre">MPB</span> */}
                </div>
                {/* Menus */}
                <div className="flex h-full flex-col">
                    <ul className="flex-col gap-2 overflow-hidden whitespace-pre px-2.5 py-5 text-[0.9rem] font-medium">
                        <li>
                            <NavLink to="/" className="link active">
                                {" "}
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                    {/* second  */}
                    <div className="" />
                </div>

                {/* control button */}
                <motion.div
                    animate={
                        isOpen
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
                    onClick={() => setIsOpen(!isOpen)}
                    onKeyDown={handleKeyPress}
                    className="absolute bottom-3 right-2 z-50 hidden h-fit w-fit cursor-pointer md:block"
                >
                    <IoIosArrowBack size={25} />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Sidebar;
