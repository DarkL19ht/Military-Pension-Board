import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "lucide-react";

function RolesRadioGroup() {
    const [plan, setPlan] = useState("startup");

    return (
        <RadioGroup value={plan} onChange={setPlan}>
            {/* <RadioGroup.Label>View reports and onboard pensioners</RadioGroup.Label> */}
            <RadioGroup.Option value="startup" className="mt-3">
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
                                            checked ? "h-5 w-5 bg-emerald-500" : "h-4 w-4"
                                        }
                                    />
                                )}
                            </div>
                        </div>
                        <p className="mt-1 align-bottom">View Reports</p>
                    </div>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="business" className="mt-3">
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
                                            checked ? "h-5 w-5 bg-emerald-500" : "h-4 w-4"
                                        }
                                    />
                                )}
                            </div>
                        </div>
                        <p className="mt-1 align-bottom">Onboard Pensioners</p>
                    </div>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="pensionersInfo" className="mt-3">
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
                                            checked ? "h-5 w-5 bg-emerald-500" : "h-4 w-4"
                                        }
                                    />
                                )}
                            </div>
                        </div>
                        <p className="mt-1 align-bottom">View Pensioners Information</p>
                    </div>
                )}
            </RadioGroup.Option>
        </RadioGroup>
    );
}

export default RolesRadioGroup;
