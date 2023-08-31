import { useState } from "react";
import { Disclosure } from "@headlessui/react";
// import { CheckIcon } from "lucide-react";
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
    const [viewReports, setViewReports] = useState(false);
    const [onboardPensioners, setOnboardPensioners] = useState(false);
    const [viewPensionersInfo, setViewPensionersInfo] = useState(false);
    const { label, color, headerColor, checkboxColor } = props;

    // const handleReportsChnage = () => setViewReports(true)

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

                            <div className="mt-2 flex justify-start">
                                <input
                                    id="viewReports"
                                    type="checkbox"
                                    name="adminRight"
                                    value={viewReports}
                                    onChange={() => setViewReports(true)}
                                    className={`styled-checkbox mb-2 mr-1 ${checkboxColor}`}
                                />
                                <label htmlFor="viewReports">View Reports</label>
                            </div>

                            <div className="flex justify-start">
                                <input
                                    id="onboardPensioners"
                                    type="checkbox"
                                    name="adminRight"
                                    value={onboardPensioners}
                                    onChange={() => setOnboardPensioners(true)}
                                    className={`styled-checkbox mb-2 mr-1 ${checkboxColor}`}
                                />
                                <label htmlFor="onboardPensioners">
                                    Onboard Pensioners
                                </label>
                            </div>

                            <div className="flex justify-start">
                                <input
                                    id="viewPensionersInfo"
                                    type="checkbox"
                                    name="adminRight"
                                    value={viewPensionersInfo}
                                    onChange={() => setViewPensionersInfo(true)}
                                    className={`styled-checkbox mb-2 mr-1 ${checkboxColor}`}
                                />
                                <label htmlFor="viewPensionersInfo">
                                    View Pensioners Information
                                </label>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}

export default Rolebar;
