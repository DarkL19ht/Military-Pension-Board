/* eslint-disable react/require-default-props */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useCallback } from "react";
import { BsXCircle } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi2";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const panelVariants = cva(
    `w-full transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all`,
    {
        variants: {
            size: {
                sm: "max-w-sm",
                md: "max-w-md",
                lg: "max-w-lg",
                xl: "max-w-xl",
                "2xl": "max-w-2xl",
                "3xl": "max-w-3xl",
                xlarge: "w-full",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);
const titleVariants = cva(`flex items-center px-6 py-3`, {
    variants: {
        bgTitle: {
            default: "bg-white text-green-600",
            primary: "bg-green-100 text-green-600 font-bold",
            secondary: "bg-red-100",
        },
    },
    defaultVariants: {
        bgTitle: "default",
    },
});

interface IModal {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
    goBack?: () => void;
    title?: string;
    backdrop?: boolean;
    hasBackArrow?: boolean;
    showCloseButton?: boolean;
    showDivider?: boolean;
}

export interface IProps
    extends IModal,
        VariantProps<typeof panelVariants>,
        VariantProps<typeof titleVariants> {}

export default function MpbModal({
    showCloseButton = true,
    goBack = undefined,
    title = "",
    size,
    backdrop = false,
    hasBackArrow = false,
    showDivider = true,
    bgTitle,
    isOpen,
    closeModal,
    children,
}: IProps) {
    const hasBackdrop = useCallback(() => {
        if (backdrop) {
            closeModal();
            return false;
        }
        return false;
    }, [backdrop, closeModal]);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[9999]" onClose={hasBackdrop}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {/* bg-opacity controls the background backdrop density/opacity */}
                    <div className={cn("fixed inset-0 bg-black bg-opacity-70")} />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    {/* items-start, items-center controls the position of the modal */}
                    <div className="flex min-h-full items-center justify-center px-10 py-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {/*  max-w-md, controls the width size */}
                            <Dialog.Panel
                                className={cn(
                                    panelVariants({
                                        size,
                                    })
                                )}
                            >
                                <>
                                    <Dialog.Title
                                        as="h1"
                                        className={cn(
                                            titleVariants({
                                                bgTitle,
                                            }),
                                            title ? "justify-between" : "justify-end"
                                        )}
                                    >
                                        {hasBackArrow && (
                                            <div>
                                                <HiArrowLeft
                                                    fontSize={25}
                                                    className="cursor-pointer"
                                                    onClick={goBack}
                                                />
                                            </div>
                                        )}
                                        {title && (
                                            <h3 className="flex-1 text-center text-xl font-light">
                                                {title}
                                            </h3>
                                        )}
                                        {showCloseButton && (
                                            <span>
                                                <BsXCircle
                                                    fontSize={25}
                                                    className="cursor-pointer"
                                                    onClick={closeModal}
                                                />
                                            </span>
                                        )}
                                    </Dialog.Title>
                                    {showDivider && <hr />}
                                </>
                                <div>{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}