import { CgMoreVertical } from "react-icons/cg";
import { Link } from "react-router-dom";
import Pagination from "@/components/pagination";
import { pensionersData } from "@/lib/fakers";

export default function Pensioner() {
    return (
        <div className="mx-auto w-[95%]">
            <div className="mb-2 flex w-full items-center justify-between py-3">
                {/* Breacrumb */}
                <nav aria-label="breadcrumb">
                    <ol className="inline-flex items-center space-x-2 py-2 text-sm font-medium">
                        <li className="inline-flex items-center">
                            <Link
                                to="/"
                                className="text-secondary-500 hover:text-secondary-600"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <span className="text-secondary-400">/</span>
                            <Link
                                to="/"
                                className="text-secondary-500 hover:text-secondary-600"
                            >
                                Pensioners
                            </Link>
                        </li>
                    </ol>
                </nav>
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="bg-white-700 rounded-md border-[1.5px] border-green-600 px-4 py-1.5 text-xs text-green-600"
                    >
                        Download report
                    </button>
                    <button
                        type="button"
                        className="rounded-md bg-green-700 px-4 py-1.5 text-xs text-white"
                    >
                        Add Pensioner
                    </button>
                </div>
            </div>
            {/* Card layout */}
            <div className="mb-20 w-full overflow-auto rounded-md border border-gray-100 p-5 shadow-md">
                {/* Table UI */}
                <table className="w-full table-auto border border-gray-300 text-left font-light">
                    <thead className="t border-b bg-[#F2FAF5] font-medium">
                        <tr className="text-[#00873D]">
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                S/N
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm ">
                                Image
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                First Name
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Middle Name
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Last Name
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Rank
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Verification Mode
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Reference ID
                            </th>

                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Status
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-sm">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pensionersData?.map((item) => {
                            return (
                                <tr className="border-b" key={item.id}>
                                    <td className="whitespace-nowrap px-2 py-1 text-center text-xs font-medium">
                                        {item.id}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                        <div className="flex items-center justify-center">
                                            <img
                                                src={item.image}
                                                alt=""
                                                style={{ width: "40px", height: "40px" }}
                                                className="rounded-[50%]"
                                            />
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1  text-center text-xs">
                                        {item.firstName}
                                    </td>
                                    <td className="t whitespace-nowrap px-2 py-1 text-center text-xs">
                                        {item.middleName}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1  text-center text-xs">
                                        {item.lastName}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1 text-center text-xs">
                                        {item.rank}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1  text-center text-xs">
                                        {item.referenceId}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1  text-center text-xs">
                                        {item.verificationMode}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-1  text-center text-xs">
                                        <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-xs">
                                        <CgMoreVertical />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="w-full py-5">
                    <Pagination />
                </div>
            </div>
        </div>
    );
}
