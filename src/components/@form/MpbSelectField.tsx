import { useController, UseControllerProps, Control } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { cn } from "@/lib";

interface InputProps
    extends UseControllerProps,
        Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "name" | "defaultValue"> {
    label?: string;
    asterik?: boolean;
    icon?: any;
    className?: string;
    options: any[];
    optionTitle?: string;
    optionValue?: string | any;
    optionLabel?: string | any;
    control: Control<any>;
}

export default function MpbSelectField(props: InputProps) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const {
        name,
        label,
        asterik,
        icon,
        className,
        optionTitle,
        optionValue,
        optionLabel,
        options,
        ...others
    } = props;

    const baseClass = cn(icon && "pl-10", className, {
        "ring-1 ring-red-500 border-none focus:ring-1 focus:ring-red-500":
            isTouched && !!errors[name]?.message,
        "ring-1 ring-red-600 border-none focus:ring-1 focus:ring-red-500":
            !!errors[name]?.message,
    });

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
                <select
                    className={baseClass}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    {...others}
                >
                    <option value="">{optionTitle}</option>
                    {options?.map((data: any) => {
                        return (
                            <option key={data[optionValue]} value={data[optionValue]}>
                                {data[optionLabel]}
                            </option>
                        );
                    })}
                </select>
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

MpbSelectField.defaultProps = {
    optionTitle: "",
    optionValue: "value",
    optionLabel: "label",
    asterik: true,
    label: "",
    className: "",
    icon: "",
};
