import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const headingVariants = cva("", {
    variants: {
        as: {
            h1: "text-4xl",
            h2: "",
            h3: "",
        },
        variant: {
            default: "",
            success: "",
            danger: "",
            warning: "",
            info: "",
        },
    },
    compoundVariants: [{ as: "h1", class: "uppercase" }],
    defaultVariants: {
        as: "h2",
    },
});

interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headingVariants> {
    title: string;
    className?: string;
}

export default function Typography({ className, as, title, ...props }: HeadingProps) {
    return (
        <h1
            className={cn(
                headingVariants({
                    as,
                    className,
                })
            )}
            {...props}
        >
            {title}
        </h1>
    );
}

Typography.defaultProps = {
    className: "",
};
