import { useState, Fragment, useMemo } from "react";
import {
    Search,
    // MoreVertical
} from "lucide-react";
import { PaginationState, ColumnDef } from "@tanstack/react-table";
import { RadioGroup } from "@headlessui/react";
import DataTable from "@/components/ui/table/SSRDataTable";
import { IPensionerDataContent } from "@/types/pensioner";
import useGetPensioners from "@/api/pensioner-controller/useGetPensioners";
import appConfig from "@/config";

export default function Pensioner() {
    const [status, setStatus] = useState("");
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: appConfig.defaultPageSize,
    });

    const defaultData = useMemo(() => [], []);

    const fetchDataOptions = {
        pageNumber: pageIndex + 1,
        size: pageSize,
    };

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    );

    const { data, isLoading } = useGetPensioners(fetchDataOptions);

    const columns = useMemo<ColumnDef<IPensionerDataContent>[]>(
        () => [
            {
                accessorKey: "id",
                header: "ID",
            },
            {
                accessorKey: "firstName",
                header: "First Name",
            },
            {
                accessorKey: "lastName",
                header: "Last Name",
            },
            {
                accessorKey: "serviceNo",
                header: "Service ID",
            },
            {
                accessorKey: "rank.name",
                header: "Rank",
            },
            {
                accessorKey: "verificationOption",
                header: "Verification Mode",
            },
            {
                accessorKey: "status",
                header: "Status",
            },
            {
                // accessorKey: "",
                header: "Action",
                id: "Action",
            },
        ],
        []
    );
    return (
        <div className="mx-auto w-[95%]">
            <div className="mb-2 flex w-full items-center justify-between py-3">
                <h4 className="text-2xl">Verification Acceptance</h4>
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="bg-white-700 rounded-md border-[1.5px] border-green-600 px-4 py-2 text-xs text-green-600"
                    >
                        Download report
                    </button>
                    <button
                        type="button"
                        className="rounded-md bg-green-700 px-4 py-2 text-xs text-white"
                    >
                        Add Pensioner
                    </button>
                </div>
            </div>
            {/* Card layout */}
            <div className="mb-20 w-full overflow-auto rounded-md border border-gray-100 p-5 shadow-md">
                {/* Table UI */}
                <div className="mb-4 flex justify-between divide-y-reverse">
                    {/* <h4 className="text-base">Verification Acceptance</h4> */}
                    <div className="">
                        <RadioGroup value={status} onChange={setStatus}>
                            <div className="flex gap-10">
                                <RadioGroup.Option value="All" as={Fragment}>
                                    {() => (
                                        <div className="flex cursor-pointer items-center gap-2">
                                            <div className="h-3 w-3 rounded-full bg-black" />
                                            <button type="button">All</button>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                                <RadioGroup.Option value="completed" as={Fragment}>
                                    {() => (
                                        <div className="flex cursor-pointer items-center gap-2">
                                            <div className="h-3 w-3 rounded-full bg-green-500" />
                                            <button type="button">Completed</button>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                                <RadioGroup.Option value="Successful" as={Fragment}>
                                    {() => (
                                        <div className="flex cursor-pointer items-center gap-2">
                                            <div className="h-3 w-3 rounded-full bg-blue-500" />
                                            <button type="button">Successful</button>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                                <RadioGroup.Option value="Ongoing" as={Fragment}>
                                    {() => (
                                        <div className="flex cursor-pointer items-center gap-2">
                                            <div className="h-3 w-3 rounded-full bg-amber-500" />
                                            <button type="button">Ongoing</button>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                                <RadioGroup.Option value="Failed" as={Fragment}>
                                    {() => (
                                        <div className="flex cursor-pointer items-center gap-2">
                                            <div className="h-3 w-3 rounded-full bg-red-500" />
                                            <button type="button">Failed</button>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                {/* <hr /> */}

                <div className="flex justify-between py-5">
                    <div className="w-[30%] max-w-sm">
                        <div className="group relative">
                            {/* TODO: Refactor this to a SearchInput components */}
                            <input
                                type="text"
                                id="example9"
                                className="focus:border-primary-400 focus:ring-primary-200 
                                block w-full rounded-md border-gray-300 py-2 pr-10 
                                shadow-sm outline-none transition-all placeholder:text-sm
                                hover:bg-gray-50
                                "
                                placeholder="Search by pensioner's name..."
                            />
                            <div
                                className="pointer-events-none absolute inset-y-0 
                                right-0 flex items-center  px-2.5 text-gray-500"
                            >
                                <Search size={20} />
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="rounded-md bg-gray-100 px-6 py-2 text-base font-light"
                    >
                        Filter By:
                    </button>
                </div>
                <DataTable
                    columns={columns}
                    data={data?.content || defaultData}
                    pagination={pagination}
                    setPagination={setPagination}
                    pageCount={data?.totalPages}
                    totalRecords={data?.totalElements}
                    isLoading={isLoading}
                    pageSizeOptions={[5, 10, 20, 30, 50, 100]}
                />
            </div>
        </div>
    );
}
