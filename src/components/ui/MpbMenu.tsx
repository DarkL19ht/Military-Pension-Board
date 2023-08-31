/* eslint-disable react/require-default-props */
import { Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import { cn } from "@/lib";

export default function MpbMenu({ children }: { children: React.ReactNode }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {children}
        </Menu>
    );
}

function Button({
    children,
    className = "",
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Menu.Button onClick={onClick} className={cn("inline-flex", className)}>
            {children}
        </Menu.Button>
    );
}

function MenuItems({
    className = "",
    // width=80,
    children,
}: {
    className?: string;
    // width?: number;
    children: React.ReactNode;
}) {
    const menuItemClasses = cn(
        "origin-top-right divide-y",
        "divide-gray-100 rounded-md bg-white",
        "ring-1 ring-black ring-opacity-5",
        "shadow-lg focus:outline-none",
        `absolute w-52`
    );

    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className={cn(menuItemClasses, className)}>
                <div className="px-1 py-1">{children}</div>
            </Menu.Items>
        </Transition>
    );
}

interface IMenuItem {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

function MenuItem({ className, onClick = undefined, children, ...props }: IMenuItem) {
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    {...props}
                    type="button"
                    onClick={onClick}
                    className={cn(
                        "group flex w-full items-center",
                        " rounded-md px-2 py-2",
                        "text-sm text-gray-900",
                        active && "bg-hover-brand",
                        className
                    )}
                >
                    {children}
                </button>
            )}
        </Menu.Item>
    );
}
MpbMenu.Button = Button;
MpbMenu.Items = MenuItems;
MpbMenu.Item = MenuItem;
