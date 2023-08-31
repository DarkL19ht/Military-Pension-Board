import { useController, UseControllerProps, Control } from "react-hook-form";
// import { IconType } from "react-icons";
import { cn } from "@/lib";

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
}

export default function MpbCheckbox(props: UseControllerProps<InputProps>) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const { type, name, label, className, ...others } = props;

    const baseClass = cn(`input-control`, className, {
        "ring-1 ring-red-500 border-none focus:ring-1 focus:ring-red-500":
            isTouched && !!errors[name]?.message,
        "ring-1 ring-red-600 border-none focus:ring-1 focus:ring-red-500":
            !!errors[name]?.message,
    });

    return (
        <>
            <div className="flex items-center gap-3">
                <input
                    name={name}
                    type="checkbox"
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                    onBlur={onBlur}
                    className={baseClass}
                    {...others}
                />
                {label && (
                    <label htmlFor={name} className="input-label">
                        {label}
                    </label>
                )}
            </div>
            {errors[name] && (
                <p className="mt-1 text-sm text-red-500">
                    {errors[name] && errors[name].message}
                </p>
            )}
        </>
    );
}
