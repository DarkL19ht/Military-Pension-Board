import { cn } from "@/lib";

export default function MpbSkeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-gradient-to-r from-gray-300 via-gray-200 to-gray-200 ",
                className
            )}
            {...props}
        />
    );
}
