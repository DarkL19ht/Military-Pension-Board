import { useController, UseControllerProps, Control } from "react-hook-form";
import Select from "react-select";

interface InputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
    name: TName;
    label?: string;
    asterik: boolean;
    className?: string;
    rule?: any;
    control: Control<TFieldValues>;
    options: any[];
    rules: any;
}

export default function MpbReactSelectField(props: UseControllerProps<InputProps>) {
    const {
        field,
        // fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const { name, label, asterik = true, options, ...others } = props;

    const selectStyle = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: "white !important",
            padding: "3px",
            minHeight: 43,
            borderRadius: "6px",
            boxShadow: "none",
            outline: "none",
            cursor: "pointer",
            border: `1px solid ${
                errors[name] && errors[name].message ? "#dc2626" : "#9ca3af"
            } `,
        }),
        option: (styles: any) => {
            return {
                ...styles,
                cursor: "pointer",
            };
        },
    };

    return (
        <>
            <label htmlFor="" className="input-label">
                {asterik && <span className="text-red-600">*</span>}
                &nbsp;{label}
            </label>
            <Select
                {...field}
                {...others}
                name={name}
                options={options}
                styles={selectStyle}
                className="basic-multi-select"
                classNamePrefix="react-select"
                isClearable
            />
            {errors[name] && (
                <span className="mt-1 text-sm text-red-700" data-cy={name}>
                    {errors[name] && errors[name].message}
                </span>
            )}
        </>
    );
}
