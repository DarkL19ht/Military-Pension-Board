/* eslint-disable react/require-default-props */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";
import LoadingSpinner from "@/assets/icons/LoadingSpinner";

const buttonVariants = cva(
    `inline-flex items-center justify-center rounded-md text-sm 
    font-medium ring-offset-background 
    transition-colors focus-visible:outline-none 
    focus-visible:ring-2 focus-visible:ring-ring 
    focus-visible:ring-offset-2
    disabled:pointer-events-none 
    disabled:opacity-50`,
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground ", // add hover:
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
            fullWidth: {
                true: "w-full",
            },
            disabled: {
                true: "disabled:cursor-not-allowed disabled:bg-gray-300",
            },
        },
        defaultVariants: {
            variant: "default",
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
                        <LoadingSpinner className="!text-blue-brand" />
                        <div className="flex items-center">
                            <span className="capitalize">{loadingText}</span>
                            <HiOutlineDotsHorizontal
                                fontSize={25}
                                className="animate-pulse"
                            />
                        </div>
                    </div>
                ) : (
                    <span>{title}</span>
                )}
            </Comp>
        );
    }
);
MpbButton.displayName = "Button";

export { MpbButton, buttonVariants };
