import ReactPaginate from "react-paginate";
import { cn } from "@/lib";
import Skeleton from "@/components/ui/skeleton";

const LinkStyle = cn(`z-10 inline-flex items-center rounded-md  
                    px-4 py-2 font-medium text-gray-700 border border-gray-300 bg-white hover:border-green-500`);

export default function pagination({ table, isLoading, totalRecords }: any) {
    return (
        <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:justify-between md:gap-y-0">
            <div className="flex flex-col lg:flex-row">
                <span className="self-center px-[5px] text-[14px] font-[600] text-[#000000]">
                    Show
                </span>
                <div className="cursor-pointer rounded-[4px]  focus:border-none focus:outline-none ">
                    <select
                        className="border-nonefocus:outline-0 hover:cursor-pointer "
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 15, 20].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {isLoading ? (
                <Skeleton className="h-8 w-32" />
            ) : (
                <div>
                    <span className="text-sm text-gray-400">
                        {/* {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()} */}
                        Total records: {totalRecords}
                    </span>
                </div>
            )}
            {isLoading && <Skeleton className="h-8 w-40 " />}

            <div className={cn(`flex`, isLoading && "hidden")}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={({ selected }) => table.setPageIndex(selected)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    pageCount={table.getPageCount()}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="inline-flex items-center space-x-2 rounded-md text-sm"
                    pageClassName={LinkStyle}
                    previousClassName={LinkStyle}
                    nextClassName={LinkStyle}
                    breakClassName="hover:text-green-500"
                    activeClassName="border bg-green-500 text-white"
                    // breakLinkClassName=""
                    // pageLinkClassName="bg-red-500"
                    // previousLinkClassName=""
                />
            </div>
        </div>
    );
}
