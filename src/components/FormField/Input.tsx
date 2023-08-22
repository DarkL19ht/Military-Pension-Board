import { InputProps } from "../../../types/index";

const Input = ({ label, name, type, id, icon: Icon, iconSize }: InputProps) => {
  return (
    <div className="mb-[31px]">
      <label htmlFor="username" className="font-latoRegular">
        <span className="text-[#DB1813] mr-[6px]">*</span>
        {label}
      </label>
      <div className="mt-[14px] flex items-center w-full rounded-[13px]  px-[19px] py-[20px] border-[#D8D7D7] border-2 border-solid text-[#3D3333] text-[16px] font-[600]">
        <span className="pr-[12px]">{Icon && <Icon size={iconSize} />}</span>

        <input
          type={type}
          name={name}
          id={id}
          required
          className="bg-none focus:outline-0 w-full border-0"
        />
      </div>
    </div>
  );
};

export default Input;
