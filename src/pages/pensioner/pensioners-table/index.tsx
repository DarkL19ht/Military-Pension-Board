/* eslint-disable react/no-unstable-nested-components */
import React, { useState, Fragment, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, PenSquare, MoreVertical } from "lucide-react";
import moment from "moment";
import _ from "lodash";
import { PaginationState, ColumnDef } from "@tanstack/react-table";
import { RadioGroup } from "@headlessui/react";
import DataTable from "@/components/ui/table/SSRDataTable";
import { MpbMenu, MenuButton, MenuItems, MenuItem, MpbSearchInput } from "@/components";
import { IPensionerDataContent } from "@/types/pensioner";
import useGetPensioners from "@/api/pensioner-controller/useGetPensioners";
import appConfig from "@/config";
import { cn } from "@/lib";
import { STATUS } from "@/types/enum";

export default function Pensioner() {
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: appConfig.defaultPageSize,
    });

    const defaultData = useMemo(() => [], []);

    const fetchDataOptions = {
        page: pageIndex + 1,
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
            // {
            //     accessorKey: "id",
            //     header: "ID",
            // },
            {
                accessorKey: "",
                header: "Name",
                cell: ({ row }) => {
                    return (
                        <div className="flex items-center gap-1">
                            <div
                                className={cn(
                                    `h-2 w-2 rounded-full`,
                                    STATUS.ENABLED === row?.original?.status &&
                                        "bg-green-600",
                                    STATUS.DISABLED === row?.original?.status &&
                                        "bg-red-600"
                                )}
                            />
                            <div className="flex gap-2">
                                <span>{_.startCase(row?.original?.firstName)}</span>
                                <span>{_.startCase(row?.original?.lastName)}</span>
                            </div>
                        </div>
                    );
                },
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
                accessorKey: "createdOn",
                header: "Verification Date",
                cell: ({ row }) => {
                    return (
                        <div className="flex flex-col gap-1">
                            <span>
                                {moment(row?.original?.createdOn).format("MMMM Do, YYYY")}
                            </span>
                        </div>
                    );
                },
            },
            {
                accessorKey: "verificationOption",
                header: "Verification Mode",
            },
            {
                accessorKey: "verificationStage",
                header: "Verification Stage",
            },
            {
                accessorKey: "status",
                header: "Status",
            },
            {
                // accessorKey: "",
                header: "Action",
                id: "Action",
                cell: () => {
                    return (
                        <div
                            className="flex cursor-pointer items-center justify-center 
                            whitespace-nowrap px-2 py-4 text-center text-xs"
                        >
                            <MpbMenu>
                                <MenuButton>
                                    <MoreVertical />
                                </MenuButton>
                                <MenuItems className="right-8 top-0 w-40">
                                    <MenuItem
                                        className="flex items-center gap-3 hover:bg-green-50"
                                        onClick={() => navigate("/pensioners/profile")}
                                    >
                                        View Detail
                                    </MenuItem>
                                </MenuItems>
                            </MpbMenu>
                        </div>
                    );
                },
            },
        ],
        [navigate]
    );
    return (
        <div className="mx-auto w-[95%]">
            {status}
            <div className="mb-2 flex w-full items-center justify-between py-3">
                <h4 className="text-2xl">Pensioners Details</h4>
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="bg-white-700 rounded-md border
                         border-green-600 px-4 py-2 text-xs text-green-600"
                    >
                        Download report
                    </button>
                    <MpbMenu>
                        <MenuButton
                            className="rounded-md border border-green-600
                         bg-green-700 px-4 py-2 text-xs text-white"
                        >
                            Add Pensioner
                        </MenuButton>
                        <MenuItems className="right-0 mt-2">
                            <MenuItem
                                className="flex items-center gap-4 hover:bg-green-50"
                                onClick={() => navigate("/pensioners/add-pensioners")}
                            >
                                <PenSquare size={17} />
                                <span>Manual entry</span>
                            </MenuItem>{" "}
                            <MenuItem className="flex items-center gap-4 hover:bg-green-50">
                                <Upload size={17} />
                                <span>Upload CSV</span>
                            </MenuItem>
                        </MenuItems>
                    </MpbMenu>
                </div>
            </div>
            {/* Card layout */}
            {/* overflow-auto */}
            <div className="mb-20 w-full overflow-auto rounded-md border border-gray-100 p-5 shadow-md">
                {/* Table UI */}
                <div className="mb-4 flex justify-between divide-y-reverse">
                    <h4 className="text-base">All Verification types</h4>
                    <div className="">
                        <RadioGroup value={status} onChange={setStatus}>
                            <div className="flex gap-10 text-base text-gray-800">
                                {/* TODO: create object and map through */}
                                <RadioGroup.Option value="All" as={Fragment}>
                                    {() => (
                                        <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-gray-200 px-5 py-2">
                                            <div className="h-3 w-3 rounded-full bg-black" />
                                            <button type="button">All</button>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                                <RadioGroup.Option value="completed" as={Fragment}>
                                    {() => (
                                        <div className="flex cursor-pointer items-center gap-1">
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
                        <MpbSearchInput placeholder="Search by pensioner's name..." />
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
                    pageSizeOptions={[5, 10, 20, 30, 50, 100, 300]}
                />
            </div>
        </div>
    );
}
