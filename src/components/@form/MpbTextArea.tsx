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
    name: string;
    type: string;
    asterik: boolean;
    icon?: IconType;
    className?: string;
    rule?: any;
    control: Control<TFieldValues>;
    rows: number;
}

export default function MpbTextArea(props: UseControllerProps<InputProps>) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const {
        type,
        name,
        label,
        rows = 3,
        asterik = true,
        icon,
        className,
        ...others
    } = props;

    const baseClass = cn(className, {
        "ring-1 ring-red-500 border-none focus:ring-1 focus:ring-red-500":
            isTouched && !!errors[name]?.message,
        "ring-1 ring-red-600 border-none focus:ring-1 focus:ring-red-500":
            !!errors[name]?.message,
    });

    return (
        <>
            <div>
                {label && (
                    <label
                        htmlFor={name}
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        {asterik && <span className="mr-[6px] text-[#DB1813]">*</span>}
                        {label}
                    </label>
                )}
                <textarea
                    id={name}
                    name={name}
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    rows={rows}
                    placeholder="Leave a message"
                    defaultValue=""
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
