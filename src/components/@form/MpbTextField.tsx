import { useController, UseControllerProps, Control } from "react-hook-form";
import { IconType } from "react-icons";
import { cn } from "@/lib";

// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
// label: string;
// name: string;
// type: string;
// asterik: boolean;
// icon: IconType;
// className: string;
//     rule: any;
//     control: any;
// }

// type ValidationRules = {
//     required: string;
//     pattern: {
//         value: string;
//         message: string;
//     };
// };

interface InputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
    name: TName;
    label?: string;
    type: string;
    asterik: boolean;
    icon?: IconType;
    className?: string;
    rule?: any;
    control: Control<TFieldValues>;
}

export default function MpbTextField(props: UseControllerProps<InputProps>) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const { type, name, label, asterik = true, icon, className, ...others } = props;

    const baseClass = cn(
        `input-control`,
        icon && "pl-10",
        "placeholder:text-sm placeholder:text-gray-400 placeholder:font-light",
        {
            "ring-1 ring-red-500 border-none focus:ring-1 focus:ring-red-500":
                isTouched && !!errors[name]?.message,
            "ring-1 ring-red-600 border-none focus:ring-1 focus:ring-red-500":
                !!errors[name]?.message,
        },
        className
    );

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
                    {...others}
                />
            </div>
            {errors[name] && (
                <p className="mt-1 text-sm text-red-500">
                    {errors[name] && errors[name].message}
                </p>
            )}
        </>
    );
}
