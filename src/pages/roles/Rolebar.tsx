import { useState } from "react";
import { RadioGroup, Disclosure } from "@headlessui/react";
import { CheckIcon } from "lucide-react";
// import RolesRadioGroup from "./RolesRadioGroup";
import caret from "@/assets/icons/downcaret.svg";

// label, color

interface Props {
    label: string;
    color: string;
    headerColor: string;
    checkboxColor: string;
}

function Rolebar(props: Props) {
    const [plan, setPlan] = useState("startup");
    const { label, color, headerColor, checkboxColor } = props;

    return (
        <div
            className={`${color} space-y-1 rounded-lg border-s-8 bg-neutral-50 px-4 text-sm text-gray-400`}
        >
            <Disclosure>
                {() => (
                    <>
                        <Disclosure.Button className="focus-visible:rin flex w-full justify-between  rounded-lg px-4 py-2 text-left text-sm  font-medium focus:outline-none">
                            <button
                                className={`ml-1 rounded-lg bg-slate-100 px-5 py-1 text-center font-medium ${headerColor}`}
                            >
                                {label}
                            </button>
                            <img src={caret} alt="" />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 pt-2 text-sm text-gray-500">
                            <p>View reports and onboard pensioners</p>
                            <RadioGroup value={plan} onChange={setPlan}>
                                <RadioGroup.Option value="startup" className="mt-2">
                                    {({ checked }) => (
                                        <div className="flex ">
                                            <div className="mr-3 rounded border-2 align-middle">
                                                <div
                                                    className={
                                                        checked
                                                            ? "shrink-0 text-white"
                                                            : "h-5 w-5 shrink-0 border-2 text-white"
                                                    }
                                                >
                                                    {checked && (
                                                        <CheckIcon
                                                            className={
                                                                checked
                                                                    ? `${checkboxColor} h-5 w-5`
                                                                    : "h-4 w-4"
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <p className="mt-1 align-bottom text-sm">
                                                View Reports
                                            </p>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                                <RadioGroup.Option value="business" className="mt-2">
                                    {({ checked }) => (
                                        <div className="flex ">
                                            <div className="mr-3 rounded border-2 align-middle">
                                                <div
                                                    className={
                                                        checked
                                                            ? "shrink-0 text-white"
                                                            : "h-5 w-5 shrink-0 border-2 text-white"
                                                    }
                                                >
                                                    {checked && (
                                                        <CheckIcon
                                                            className={
                                                                checked
                                                                    ? `${checkboxColor} h-5 w-5`
                                                                    : "h-4 w-4"
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <p className="mt-1 align-bottom">
                                                Onboard Pensioners
                                            </p>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                                <RadioGroup.Option
                                    value="pensionersInfo"
                                    className="mt-2"
                                >
                                    {({ checked }) => (
                                        <div className="flex ">
                                            <div className="mr-3 rounded border-2 align-middle">
                                                <div
                                                    className={
                                                        checked
                                                            ? "shrink-0 text-white"
                                                            : "h-5 w-5 shrink-0 border-2 text-white"
                                                    }
                                                >
                                                    {checked && (
                                                        <CheckIcon
                                                            className={
                                                                checked
                                                                    ? `${checkboxColor} h-5 w-5`
                                                                    : "h-4 w-4"
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <p className="mt-1 align-bottom">
                                                View Pensioners Information
                                            </p>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                            </RadioGroup>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}

export default Rolebar;
