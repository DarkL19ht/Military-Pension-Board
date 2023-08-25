import { InputProps } from "../../types/index";

function Input({ label, name, type, id, icon: Icon, iconSize }: InputProps) {
    return (
        <div className="mb-[31px]">
            <label htmlFor="username" className="font-latoRegular">
                <span className="mr-[6px] text-[#DB1813]">*</span>
                {label}
            </label>
            <div className="mt-[14px] flex w-full items-center rounded-[13px]  border-2 border-solid border-[#D8D7D7] px-[19px] py-[20px] text-[16px] font-[600] text-[#3D3333]">
                <span className="pr-[12px]">{Icon && <Icon size={iconSize} />}</span>

                <input type={type} name={name} id={id} required className="w-full border-0 bg-none focus:outline-0" />
            </div>
        </div>
    );
}

export default Input;
