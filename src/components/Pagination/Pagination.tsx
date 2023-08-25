import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Pagination() {
    return (
        <div className="mx-[25px] flex  flex-row items-center justify-between py-[16px] font-latoRegular ">
            <div className="text-[14px] font-[400] text-[#919EAB]">10 Results</div>
            <div className="">
                <div className="flex items-center">
                    <div className="mx-[31px] flex items-center">
                        <span className="px-[5px] text-[14px] font-[600] text-[#000000]">
                            Show
                        </span>
                        <div className="cursor-pointer rounded-[4px] border-2 border-[#C9C9C9]">
                            <select className="border-0 focus:outline-0">
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                            </select>
                        </div>
                    </div>
                    <nav className="isolate flex gap-[8px] -space-x-px rounded-md shadow-sm">
                        <div className="relative mx-[8px] inline-flex cursor-pointer items-center px-2 py-2">
                            <MdKeyboardArrowLeft className="h-5 w-5 text-[#C4CDD5]" />
                        </div>

                        <div className="relative z-10  mx-[1px] cursor-pointer items-center rounded-[4px] border-2 border-[#00C454] px-4 py-2 text-[12px] font-[500] text-[#00C454]">
                            1
                        </div>
                        <div className="relative z-10  mx-[10px] cursor-pointer items-center rounded-[4px] border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] text-[#212B36]">
                            2
                        </div>
                        <div className="relative z-10  mx-[10px] cursor-pointer items-center rounded-[4px] border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] text-[#212B36]">
                            3
                        </div>
                        <div className="relative z-10  mx-[10px] cursor-pointer items-center rounded-[4px] border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] text-[#212B36]">
                            ...
                        </div>
                        <div className="relative z-10  mx-[10px] cursor-pointer items-center rounded-[4px] border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] text-[#212B36]">
                            8
                        </div>
                        <div className="relative z-10  mx-[10px] cursor-pointer items-center rounded-[4px] border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] text-[#212B36]">
                            9
                        </div>
                        <div className="relative z-10  mx-[10px] cursor-pointer items-center rounded-[4px] border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] text-[#212B36]">
                            10
                        </div>
                        <div className="relative mx-[8px] inline-flex cursor-pointer items-center px-2 py-2">
                            <MdKeyboardArrowRight
                                className="h-5 w-5 text-[#232323]"
                                aria-hidden="true"
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
