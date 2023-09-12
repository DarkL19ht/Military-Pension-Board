import { RiAttachment2 } from "react-icons/ri";

export default function Notification() {
    return (
        <div className="mb-20 ml-20 mt-9 w-full rounded-md border border-gray-100 px-[3.81rem] py-5 pt-[2rem] shadow-md sm:w-[80%]">
            <div className="mb-5 text-[1.75rem] font-[600] text-[#000000]">
                Notifications
            </div>
            <div className="mb-[1.5rem] flex  w-full items-center justify-between rounded-md border border-gray-100 p-4 shadow-md">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="flex">
                                <span className="mr-[12px] h-[1.5rem] rounded-md bg-[#7E0ED7] px-2 py-1 text-[10px] text-[#ffffff]">
                                    S
                                </span>
                                <span className="">
                                    <div className="mb-[1rem] text-[13px]">
                                        <span className="font-[600]">Sandra Max</span> is
                                        requesting to onboard new pensioners
                                    </div>
                                    <div className="mb-[1rem] flex items-center">
                                        <span className="pr-[2rem] text-[13px] font-[600]">
                                            2 hrs Ago
                                        </span>
                                        <span className="flex cursor-pointer items-center rounded-md bg-[#F5F5F5] px-4 py-2 text-[13px]">
                                            <span className="px-2">
                                                <RiAttachment2 size={20} />
                                            </span>
                                            <span className="px-2"> CSV_document</span>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="mx-4 w-[73px]  rounded-[5px] bg-[#027F4D] px-[1rem] py-[0.5rem] text-center text-[10px]  text-[#ffffff]">
                        Approve
                    </button>
                    <button className="w-[73px]  rounded-[5px] bg-[#D20000] px-[1rem] py-[0.5rem] text-center text-[10px]  text-[#ffffff]">
                        Reject
                    </button>
                </div>
            </div>
            <div className="mb-[1.5rem] flex  w-full items-center justify-between rounded-md border border-gray-100 p-4 shadow-md">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="flex">
                                <span className="mr-[12px] h-[1.5rem] rounded-md bg-[#7E0ED7] px-2 py-1 text-[10px] text-[#ffffff]">
                                    S
                                </span>
                                <span className="">
                                    <div className="mb-[1rem] text-[13px]">
                                        <span className="font-[600]">Sandra Max</span> is
                                        requesting to onboard new pensioners
                                    </div>
                                    <div className="mb-[1rem] flex items-center">
                                        <span className="pr-[2rem] text-[13px] font-[600]">
                                            2 hrs Ago
                                        </span>
                                        <span className="flex cursor-pointer items-center rounded-md bg-[#F5F5F5] px-4 py-2 text-[13px]">
                                            <span className="px-2">
                                                <RiAttachment2 size={20} />
                                            </span>
                                            <span className="px-2"> CSV_document</span>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="mx-4 w-[73px]  rounded-[5px] bg-[#027F4D] px-[1rem] py-[0.5rem] text-center text-[10px]  text-[#ffffff]">
                        Approve
                    </button>
                    <button className="w-[73px]  rounded-[5px] bg-[#D20000] px-[1rem] py-[0.5rem] text-center text-[10px]  text-[#ffffff]">
                        Reject
                    </button>
                </div>
            </div>
            <div className="mb-[1.5rem] flex  w-full items-center justify-between rounded-md border border-gray-100 p-4 shadow-md">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="flex">
                                <span className="mr-[12px] h-[1.5rem] rounded-md bg-[#DA6900] px-2 py-1 text-[10px] text-[#ffffff]">
                                    S
                                </span>
                                <span className="">
                                    <div className="mb-[1rem] text-[13px] font-[600]">
                                        200 Pensioners verification pending approval
                                    </div>
                                    <div className="mb-[1rem] flex items-center">
                                        <span className="pr-[2rem] text-[13px] font-[600]">
                                            2 hrs Ago
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="mx-4   rounded-[5px] bg-[#F5F5F5] px-[1rem] py-[0.5rem] text-center text-[10px]  text-[#000000]">
                        View Pensioners
                    </button>
                </div>
            </div>
            <div className="mb-[1.5rem] flex  w-full items-center justify-between rounded-md border border-gray-100 p-4 shadow-md">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="flex">
                                <span className="mr-[12px] h-[1.5rem] rounded-md bg-[#DA6900] px-2 py-1 text-[10px] text-[#ffffff]">
                                    S
                                </span>
                                <span className="">
                                    <div className="mb-[1rem] text-[13px] font-[600]">
                                        200 Pensioners verification pending approval
                                    </div>
                                    <div className="mb-[1rem] flex items-center">
                                        <span className="pr-[2rem] text-[13px] font-[600]">
                                            2 hrs Ago
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
