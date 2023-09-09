/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useController, UseControllerProps, Control } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Select from "react-select";

interface InputProps extends UseControllerProps {
    label: string;
    asterik?: boolean;
    className?: string;
    options: any[];
    control: Control<any>;
    isMulti?: boolean;
}

export default function MpbReactSelectField(props: InputProps) {
    const {
        field,
        // fieldState: { isTouched },
        formState: { errors },
    } = useController(props);

    const { name, className, label, asterik, isMulti, options, ...others } = props;

    // TODO: this has to be review whether to remove it or not for the pensioner dataFields
    const [dataFields, index, inputField] = name.split(".");

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
                (errors[name] && errors[name]?.message) ||
                // @ts-ignore TODO: review this and resolve it
                errors?.[dataFields]?.[index]?.[inputField]?.message
                    ? "#dc2626"
                    : "#9ca3af"
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
                // name={name}
                options={options}
                styles={selectStyle}
                className="basic-multi-select"
                classNamePrefix="react-select"
                isClearable
                isMulti={isMulti}
                // value={options?.find((c) => c?.value === value)}
                // onChange={(e) => onChange(e.map((c: any) => c?.value))} = [0, 3, 4,5]
                {...field}
                {...others}
            />
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

MpbReactSelectField.defaultProps = {
    className: "",
    asterik: true,
    isMulti: false,
};
