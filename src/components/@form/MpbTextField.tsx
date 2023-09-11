/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { useController, UseControllerProps, Control } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// import { IconType } from "react-icons";
import { cn } from "@/lib";

interface InputProps
    extends UseControllerProps,
        Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "defaultValue"> {
    label?: string;
    type: string;
    asterik?: boolean;
    icon?: any;
    className?: string;
    control: Control<any>;
    // placeholder: string;
}

export default function MpbTextField(props: InputProps) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const { type, name, label, asterik = true, icon, className, ...others } = props;

    // TODO: this has to be review whether to remove it or not for the pensioner dataFields
    const [dataFields, index, field] = name.split(".");

    const baseClass = cn(
        `input-control`,
        icon && "pl-10",
        "placeholder:text-sm placeholder:text-gray-400 placeholder:font-light",
        {
            "ring-1 ring-red-500 border-none focus:ring-1 focus:ring-red-500":
                isTouched && !!errors[name]?.message,
            "ring-1 ring-red-600 border-none focus:ring-1 focus:ring-red-500":
                !!errors[name]?.message ||
                // @ts-ignore TODO: review this and resolve it
                !!errors?.[dataFields]?.[index]?.[field]?.message,
        },
        className
    );

    // "dataFields.0.email"

    return (
        <>
            {label && (
                <label htmlFor="username" className="input-label">
                    {asterik && <span className="mr-[6px] text-[#DB1813]">*</span>}
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
                        <span className="pr-[12px]">{icon}</span>
                    </div>
                )}
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={baseClass}
                    // autoComplete="off"
                    {...others}
                />
            </div>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                    <p className="mt-1 text-sm text-red-500">{message}</p>
                )}
            />
        </>
    );
}

MpbTextField.defaultProps = {
    className: "",
    label: "",
    icon: "",
    asterik: true,
};
