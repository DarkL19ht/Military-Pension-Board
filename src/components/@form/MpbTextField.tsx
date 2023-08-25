import { useController, UseControllerProps, Control } from "react-hook-form";
// import { IconType } from "react-icons";
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

interface InputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
    name: TName;
    label?: string;
    name: string;
    type: string;
    asterik: boolean;
    icon: IconType;
    className?: string;
    rule?: any;
    control: Control<TFieldValues>;
}

export default function MpbTextField(props: UseControllerProps<InputProps>) {
    const {
        field: { onChange, onBlur, value },
        // fieldState,
    } = useController(props);

    const { type, name, label, asterik = true, icon, className, ...others } = props;

    const baseClass = cn(`input-control`, className);

    return (
        <>
            {label && (
                <label htmlFor="username" className="input-label">
                    {asterik && <span className="mr-[6px] text-[#DB1813]">*</span>}
                    {label}
                </label>
            )}
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
                    {icon && <span className="pr-[12px]">{icon}</span>}
                </div>
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
        </>
    );
}
