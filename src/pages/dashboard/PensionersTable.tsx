import { CgMoreVertical } from "react-icons/cg";
// import { Link } from "react-router-dom";
// import Pagination from "@/components/ui/pagination";
import { pensionersDashboardData } from "@/lib/fakers";

export default function PensionersTable() {
    return (
        <div className="mx-auto mb-20 w-[95%] overflow-auto rounded-md border border-gray-100 px-5 py-12 shadow-md">
            {/* <div className="mb-2 flex w-full items-center justify-end py-3">
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="rounded-md border-[1.5px] border-green-600 bg-green-50 px-4 py-1 text-xs text-green-600"
                    >
                        View Full Report
                    </button>
                </div>
            </div> */}
            {/* Card layout */}
            <div className="">
                {/* Table UI */}
                <table className="w-full table-auto border border-gray-300 text-left font-light">
                    <thead className="border-b bg-[#F2FAF5] font-medium">
                        <tr className="text-[#00873D]">
                            <th
                                scope="col"
                                className="hidden px-2 py-1 text-center text-sm"
                            >
                                S/N
                            </th>

                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Pensioners Name
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Service ID
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Rank
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Verification Status
                            </th>

                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Verification Date (dd/mm/yy)
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pensionersDashboardData?.map((item) => {
                            return (
                                <tr className="border-b" key={item.id}>
                                    <td className="hidden whitespace-nowrap px-2 py-1 text-center text-xs font-medium">
                                        {item.id}
                                    </td>

                                    <td className="whitespace-nowrap px-2 py-1  text-center text-xs">
                                        {item.pensionersName}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1  text-center text-xs">
                                        {item.serviceID}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1 text-center text-xs">
                                        {item.rank}
                                    </td>

                                    <td className="whitespace-nowrap px-2 py-3  text-center text-xs">
                                        <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1  text-center text-xs">
                                        {item.verificationDate}
                                    </td>

                                    <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-xs">
                                        <CgMoreVertical />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="w-full py-5">{/* <Pagination /> */}</div>
            </div>
        </div>
    );
}
