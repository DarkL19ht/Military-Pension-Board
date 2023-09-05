import { FaLaptop } from "react-icons/fa";

import { MpbButton } from "@/components/ui/button/MpbButton";
import LineChart from "./LineChart";
import PensionersTable from "./PensionersTable";

import { PieChart } from "./PieChart";
import Pensionerslist from "./pensioners/pensionersList";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-col gap-3 bg-[#eff0f6] px-[25px] pb-5 pt-[25px]">
                <div className="flex items-center justify-between">
                    <h1>Hello, Olayinka 👋</h1>
                    <MpbButton title="Add Pensioners" variant="primary" size="sm" />
                </div>
                <div>
                    <div className=" grid grid-cols-4 gap-3 ">
                        <div className="rounded-emd bg-card flex gap-2 p-4">
                            <FaLaptop size={25} className="text-red-400" />
                            <div className="flex flex-col gap-y-2">
                                <h4>Completed Verification</h4>
                                <h1 className="text-2xl font-bold">967</h1>
                            </div>
                        </div>
                        <div className="bg-card flex gap-2 p-4">
                            <div className="mt-1">
                                <FaLaptop size={25} />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h4>Completed Verification</h4>
                                <h1 className="text-2xl font-bold">967</h1>
                            </div>
                        </div>
                        <div className="bg-card flex gap-2 p-4">
                            <div className="mt-1">
                                <FaLaptop size={25} />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h4>Completed Verification</h4>
                                <h1 className="text-2xl font-bold">967</h1>
                            </div>
                        </div>
                        <div className="bg-card flex gap-2 p-4">
                            <div className="mt-1">
                                <FaLaptop size={25} />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h4>Completed Verification</h4>
                                <h1 className="text-2xl font-bold">967</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
            </div>
            <div className="mt-3 flex max-w-full justify-center">
                <div className="mx-4 mb-20 w-4/6 overflow-auto rounded-md border border-gray-100 p-2 shadow-md">
                    <LineChart />
                </div>
                <div className="mx-4 mb-20 w-2/6 overflow-auto rounded-md border border-gray-100 p-2 shadow-md">
                    <PieChart />
                </div>
            </div>
            <div className="flex max-w-full justify-center">
                <div className="w-4/6">
                    <PensionersTable />
                </div>
                <div className="w-2/6">
                    <Pensionerslist />
                </div>
            </div>
        </>
    );
}
