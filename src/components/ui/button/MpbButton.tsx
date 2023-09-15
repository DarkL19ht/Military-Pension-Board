/* eslint-disable react/require-default-props */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import LoadingSpinner from "@/assets/icons/LoadingSpinner";

const buttonVariants = cva(
    `inline-flex items-center justify-center rounded-md text-sm 
    font-medium ring-offset-background outline-none
    transition-colors focus-visible:outline-none 
    focus-visible:ring-2 focus-visible:ring-ring 
    focus-visible:ring-offset-2
    disabled:pointer-events-none 
    disabled:opacity-50`,
    {
        variants: {
            variant: {
                primary: "bg-btn-primary text-btn-primary", // add hover:
                secondary: "bg-btn-secondary text-btn-secondary",
                success:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                warning: "bg-btn-warning text-btn-warning",
                "outline-primary":
                    "bg-outline text-outline-primary border border-outline-primary",
                "outline-secondary":
                    "bg-outline-secondary text-outline-secondary border border-outline-secondary",
                cancel: "bg-btn-cancel text-btn-cancel",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-btn-sm px-3",
                md: "h-9 rounded-btn-md px-5",
                lg: "h-11 rounded-btn-lg px-8",
            },
            fullWidth: {
                true: "w-full",
            },
            disabled: {
                true: "disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-100 ",
            },
        },
        compoundVariants: [
            {
                variant: "primary",
                disabled: true,
                class: "disabled:bg-green-300",
            },
        ],
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    title: string;
    isLoading?: boolean;
    loadingText?: string;
    disabled?: boolean;
    icon?: any;
}

const MpbButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            title,
            className,
            variant,
            size,
            fullWidth,
            disabled,
            isLoading = false,
            loadingText = "Please wait",
            icon = "",
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, disabled, fullWidth, className })
                )}
                ref={ref}
                disabled={disabled}
                {...props}
            >
                {isLoading ? (
                    <div className="flex items-center gap-2">
                        <LoadingSpinner className="text-blue-brand" />
                        <div className="flex items-center">
                            <span className="capitalize">{loadingText}</span>
                            <HiOutlineDotsHorizontal
                                fontSize={25}
                                className="animate-pulse"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        {icon}
                        <span>{title}</span>
                    </div>
                )}
            </Comp>
        );
    }
);
MpbButton.displayName = "Button";

export { MpbButton, buttonVariants };
