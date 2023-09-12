import { useController, UseControllerProps } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { cn } from "@/lib";

interface InputProps extends UseControllerProps {
    label?: string;
    // asterik: boolean;
    control: any;
    icon?: any;
    className?: string;
}

export default function MpbCheckbox(props: InputProps) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const { name, label, className, ...others } = props;

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

MpbCheckbox.defaultProps = {
    className: "",
    label: "",
    icon: "",
};
