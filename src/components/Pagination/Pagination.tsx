import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="font-latoRegular flex flex-row justify-between items-center mx-[25px] my-[8px] ">
      <div className="text-[#919EAB] text-[14px] font-[400]">10 Results</div>
      <div className="">
        <div className="flex items-center">
          <div className="flex items-center mx-[31px]">
            <span className="text-[14px] text-[#000000] font-[600] px-[15px]">
              Show
            </span>
            <div className="border-2 p-1 rounded-[4px] border-[#C9C9C9] cursor-pointer">
              <select className="border-0 focus:outline-0">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
          </div>
          <nav className="isolate flex gap-[8px] -space-x-px rounded-md shadow-sm">
            <div className="relative inline-flex items-center px-2 py-2 mx-[8px] cursor-pointer">
              <MdKeyboardArrowLeft className="h-5 w-5 text-[#C4CDD5]" />
            </div>

            <div className="relative z-10  items-center border-2 border-[#00C454] text-[#00C454] px-4 py-2 text-[12px] font-[500] rounded-[4px] mx-[1px] cursor-pointer">
              1
            </div>
            <div className="relative z-10  items-center border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] rounded-[4px] mx-[10px] text-[#212B36] cursor-pointer">
              2
            </div>
            <div className="relative z-10  items-center border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] rounded-[4px] mx-[10px] text-[#212B36] cursor-pointer">
              3
            </div>
            <div className="relative z-10  items-center border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] rounded-[4px] mx-[10px] text-[#212B36] cursor-pointer">
              ...
            </div>
            <div className="relative z-10  items-center border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] rounded-[4px] mx-[10px] text-[#212B36] cursor-pointer">
              8
            </div>
            <div className="relative z-10  items-center border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] rounded-[4px] mx-[10px] text-[#212B36] cursor-pointer">
              9
            </div>
            <div className="relative z-10  items-center border-2 border-[#DFE3E8] px-4 py-2 text-[12px] font-[500] rounded-[4px] mx-[10px] text-[#212B36] cursor-pointer">
              10
            </div>
            <div className="relative inline-flex items-center px-2 py-2 mx-[8px] cursor-pointer">
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
};

export default Pagination;
