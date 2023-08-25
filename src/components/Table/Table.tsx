import { CgMoreVertical } from "react-icons/cg";
import Pagination from "../Pagination/Pagination";

function Table() {
    return (
        <div className="overflow-hidden">
            <div className="h-full w-full bg-[#000000] ">
                <table className="w-full text-left font-light">
                    <thead className="border-b bg-[#F2FAF5] font-medium">
                        <tr className="text-[#00873D]">
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                S/N
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Image
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                First Name
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Middle Name
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Last Name
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Rank
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Verification Mode
                            </th>
                            {/* <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Verification Date
                                <div>(dd/mm/yy)</div>
                            </th> */}
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Reference ID
                            </th>
                            {/* <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Date of Birth
                                <div>(dd/mm/yy)</div>
                            </th> */}
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Status
                            </th>
                            <th scope="col" className="px-2 py-1 text-center text-[12px]">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px] font-medium">
                                01
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-[10px]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "40px", height: "40px" }}
                                        className="rounded-[50%]"
                                    />
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Josephine
                            </td>
                            <td className="t whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Andrew
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                Garba
                            </td>
                            <td className="whitespace-nowrap px-2 py-1 text-center text-[10px]">
                                Staff sergeant
                            </td>
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                NIN
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                03/07/2019
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                20NA/62/2913
                            </td>
                            {/* <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                21st/Oct/1854
                            </td> */}
                            <td className="whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <span className="rounded-[16px] bg-[#EAFCF2] px-[12px] py-[4px] font-[600] text-[#27AE60]">
                                    Completed
                                </span>
                            </td>
                            <td className="cursor-pointer whitespace-nowrap px-2 py-1  text-center text-[10px]">
                                <CgMoreVertical />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
    );
}
export default Table;
