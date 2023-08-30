import { useState, Fragment } from "react";
import { RadioGroup } from "@headlessui/react";
import MpbModal from "@/components/ui/MpbModal";
import { getClassNames } from "@/lib";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

const data = [
    {
        label: "Admin 1",
        value: "admin1",
    },
    {
        label: "Admin 2",
        value: "admin2",
    },
    {
        label: "Admin 3",
        value: "admin3",
    },
    {
        label: "Admin 4",
        value: "admin4",
    },
    {
        label: "Admin 5",
        value: "admin5",
    },
    {
        label: "Admin 6",
        value: "admin6",
    },
];

export default function ChangeRoleModal({ isOpen, closeModal }: IProps) {
    const [role, setRole] = useState("");
    const handleClose = () => {
        setRole("");
        closeModal();
    };
    return (
        <MpbModal
            showDivider={false}
            title="Change Role"
            isOpen={isOpen}
            closeModal={handleClose}
        >
            <div className="px-5 pb-5">
                <RadioGroup value={role} onChange={setRole}>
                    <RadioGroup.Label className="mb-5 flex justify-center">
                        Please, Select Admin Role
                    </RadioGroup.Label>
                    {/* <pre>{JSON.stringify(role, null, 2)}</pre> */}
                    <div className="grid grid-cols-3 gap-6">
                        {data.map((item) => {
                            return (
                                <div
                                    key={item.value}
                                    className="flex items-center space-x-2"
                                >
                                    <RadioGroup.Option
                                        value={item}
                                        key={item.value}
                                        as={Fragment}
                                    >
                                        {({ checked, active }) => (
                                            <input
                                                type="radio"
                                                name="role"
                                                className={getClassNames(
                                                    `rounded-fullborder-gray-300 h-5 w-5 
                                                    cursor-pointer shadow-sm focus:border-gray-300
                                                    focus:ring focus:ring-gray-100`,
                                                    checked && "text-green-800",
                                                    active && "text-green-600"
                                                )}
                                            />
                                        )}
                                    </RadioGroup.Option>
                                    <label
                                        htmlFor="role"
                                        className="flextext-sm"
                                        aria-disabled
                                    >
                                        {item.label}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="mt-8 inline-block rounded-md
                            bg-green-600 px-10 py-2 text-white"
                        >
                            Change Role
                        </button>
                    </div>
                </RadioGroup>
            </div>
        </MpbModal>
    );
}
