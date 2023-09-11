import { FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MpbButton } from "@/components/ui/button/MpbButton";
import LineChart from "./LineChart";
import PensionersTable from "./PensionersTable";

import { PieChart } from "./PieChart";
import Pensionerslist from "./pensioners/pensionersList";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-col gap-2 bg-[#eff0f6] px-[25px] pb-5 pt-[25px]">
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
            <div className="mt-3 max-w-full justify-center sm:flex">
                <div className="w-6/6 mx-4 mb-5 overflow-auto rounded-md border border-gray-100 p-2 pr-10 shadow-md md:w-4/6">
                    <LineChart />
                </div>
                <div className="w-6/6 mx-4 mb-5 overflow-auto rounded-md border border-gray-100 p-2 shadow-md md:w-2/6">
                    <PieChart />
                </div>
            </div>
            <nav aria-label="breadcrumb" className="">
                <ol className="mx-5 inline-flex items-center space-x-2 border-b-2 border-green-600 px-3 py-1 text-sm font-medium">
                    <li className="inline-flex items-center">
                        <Link
                            to="/"
                            className="text-secondary-500 hover:text-secondary-600 text-sm"
                        >
                            All Verification types
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className="max-w-full justify-center pr-3 md:flex">
                <div className="w-6/6 md:w-3/6 lg:w-4/6">
                    <PensionersTable />
                </div>
                <div className="w-6/6 md:w-3/6 lg:w-2/6">
                    <Pensionerslist />
                </div>
            </div>
        </>
    );
}
