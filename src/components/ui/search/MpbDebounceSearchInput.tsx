/* eslint-disable react/require-default-props */
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib";

type IProps = {
    value: string | number;
    onChange: (value: string | number) => void;
    debounce?: number;
    className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export default function MpbDebounceSearchInput({
    value: initialValue,
    onChange,
    debounce = 500,
    className = "",
    ...props
}: IProps) {
    const [value, setValue] = useState<number | string>(initialValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value, debounce, onChange]);

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
                value={value}
                onChange={handleInputChange}
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
