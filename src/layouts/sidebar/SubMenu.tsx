/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import _ from "lodash";

interface ISubMenu {
    name: string;
    path: string;
}

type TMenu = {
    name: string;
    icon: IconType;
    menus: ISubMenu[];
};

interface IData {
    data: TMenu;
}

export default function SubMenu({ data }: IData) {
    const { pathname } = useLocation();
    const [subMenuOpen, setSubMenuOpen] = useState(true);
    return (
        <>
            <li
                className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
            >
                <data.icon size={23} className="min-w-max" />
                <p className="flex-1 capitalize">{data.name}</p>
                <IoIosArrowDown
                    className={` ${subMenuOpen && "rotate-180"} duration-200 `}
                />
            </li>
            <motion.ul
                animate={
                    subMenuOpen
                        ? {
                              height: "fit-content",
                          }
                        : {
                              height: 0,
                          }
                }
                className="flex h-0 flex-col overflow-hidden pl-16 text-[0.8rem] font-normal"
            >
                {data.menus?.map((menu) => (
                    <li key={menu.name}>
                        {/* className="hover:text-blue-600 hover:font-medium" */}
                        <NavLink
                            to={`/${_.kebabCase(data?.name)}/${_.kebabCase(menu?.name)}`}
                            className="link cursor-pointer !bg-transparent capitalize"
                        >
                            {menu.name}
                        </NavLink>
                    </li>
                ))}
            </motion.ul>
        </>
    );
}
