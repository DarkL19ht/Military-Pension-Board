import { Circles } from "react-loader-spinner";
import { cn } from "@/lib";

interface IProps {
    bgColor?: string;
}

export default function LoadingSpinner({ bgColor }: IProps) {
    return (
        <div
            className={cn(
                `fixed inset-0 z-[1002] flex h-full w-screen flex-col items-center justify-center bg-opacity-80`,
                bgColor
            )}
        >
            <Circles
                height="50"
                width="50"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible
            />
            <span className="animate-pulse text-white">Please wait...</span>
        </div>
    );
}

LoadingSpinner.defaultProps = {
    bgColor: "bg-black",
};
