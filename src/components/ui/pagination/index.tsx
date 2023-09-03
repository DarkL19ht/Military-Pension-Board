import ReactPaginate from "react-paginate";
import { Updater } from "@tanstack/react-table";
import { cn } from "@/lib";
import Skeleton from "@/components/ui/skeleton/MpbSkeleton";

const LinkStyle = `z-10 inline-flex items-center rounded-md  
                    px-4 py-2 font-medium text-gray-700 border border-gray-300 bg-white hover:border-green-500`;

interface IProps {
    isLoading: boolean | undefined;
    totalRecords: number;
    pageSizeOptions: number[];
    pageSize: number;
    setPageSize: (updater: Updater<number>) => void;
    setPageIndex: (updater: Updater<number>) => void;
    getPageCount: () => number;
}

export default function pagination({
    isLoading,
    totalRecords,
    pageSizeOptions,
    pageSize,
    setPageSize,
    setPageIndex,
    getPageCount,
}: IProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:justify-between md:gap-y-0">
            <div className="flex flex-col lg:flex-row">
                <span className="self-center px-[5px] text-[14px] font-[600] text-[#000000]">
                    Show
                </span>
                <div className="cursor-pointer rounded-[4px]  focus:border-none focus:outline-none ">
                    <select
                        className="border-nonefocus:outline-0 hover:cursor-pointer "
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {pageSizeOptions?.map((size: number) => (
                            <option key={size} value={size}>
                                {size}
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
                    onPageChange={({ selected }) => setPageIndex(selected)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    pageCount={getPageCount()}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="inline-flex items-center space-x-2 rounded-md text-sm"
                    pageClassName={LinkStyle}
                    previousClassName={cn(
                        LinkStyle,
                        "disabled:text-gray-200 disabled:bg-gray-300"
                    )}
                    nextClassName={LinkStyle}
                    breakClassName="hover:text-green-500"
                    activeClassName="border-2 border-outline-primary"
                    // breakLinkClassName=""
                    // pageLinkClassName="bg-red-500"
                    // previousLinkClassName=""
                />
            </div>
        </div>
    );
}
