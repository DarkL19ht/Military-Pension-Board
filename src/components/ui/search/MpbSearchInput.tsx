import { Search } from "lucide-react";
import { cn } from "@/lib";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
export default function MpbSearchInput({ className, ...props }: IProps) {
    return (
        <div className="group relative">
            <input
                type="text"
                className={cn(
                    `focus:border-primary-400 focus:ring-primary-200 
                block w-full rounded-md border-gray-300 py-2 pr-10 
                shadow-sm outline-none transition-all placeholder:text-sm
                hover:bg-gray-50`,
                    className
                )}
                // placeholder="Search by pensioner's name..."
                {...props}
            />
            <div
                className="pointer-events-none absolute inset-y-0 
                right-0 flex items-center  px-2.5 text-gray-500"
            >
                <Search size={20} />
            </div>
        </div>
    );
}

MpbSearchInput.defaultProps = {
    className: "",
};
