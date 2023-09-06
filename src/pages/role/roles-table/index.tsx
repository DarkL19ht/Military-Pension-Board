/* eslint-disable react/no-unstable-nested-components */
import { useMemo, useState } from "react";
import moment from "moment";
import { CgMoreVertical } from "react-icons/cg";
import { Search, Trash2, RotateCcw, FileEdit, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
// React Table
import { PaginationState, ColumnDef } from "@tanstack/react-table";
import useGetRoles from "@/api/role-controller/useGetRoles";
import DataTable from "./DataTable";
import { MpbButton, MpbMenu } from "@/components";
import appConfig from "@/config";
import { STATUS } from "@/types/enum";
import { IRoleResponsePayload } from "@/types/role";
import { cn } from "@/lib";

export default function Roles() {
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: appConfig.defaultPageSize,
    });

    const fetchDataOptions = {
        pageNumber: pageIndex + 1,
        size: pageSize,
    };

    const { data, isLoading } = useGetRoles(fetchDataOptions);

    const defaultData = useMemo(() => [], []);

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    );

    const columns = useMemo<ColumnDef<IRoleResponsePayload>[]>(
        () => [
            {
                accessorKey: "name",
                header: "Name",
            },
            {
                accessorKey: "description",
                header: "Description",
            },
            {
                accessorKey: "status",
                header: "Status",
                cell: ({ row }) => {
                    return (
                        <span
                            className={cn(
                                STATUS.ENABLED === row?.original?.status &&
                                    "text-green-500",
                                STATUS.DISABLED === row?.original?.status &&
                                    "text-red-500"
                            )}
                        >
                            {row?.original?.status}
                        </span>
                    );
                },
            },
            {
                accessorKey: "createdOn",
                header: "Date Created",
                cell: ({ row }) => {
                    return (
                        <div className="flex flex-col gap-1">
                            <span>
                                {moment(row?.original?.createdOn).format("MMMM Do YYYY")}
                            </span>
                            <span className="text-gray-400">
                                {moment(row?.original?.createdOn).format("dddd, ha")}
                            </span>
                        </div>
                    );
                },
            },
            {
                accessorKey: "updatedOn",
                header: "Date Updated",
                cell: ({ row }) => {
                    return (
                        <div className="flex flex-col gap-1">
                            <span>
                                {moment(row?.original?.createdOn).format("MMMM Do YYYY")}
                            </span>
                            <span className="text-gray-400">
                                {moment(row?.original?.createdOn).format("dddd, ha")}
                            </span>
                        </div>
                    );
                },
            },
            {
                // accessorKey: "",
                header: "Action",
                id: "Action",
                cell: ({ row }) => {
                    return (
                        <div
                            className="flex cursor-pointer items-center justify-center 
                            whitespace-nowrap px-2 py-4 text-center text-xs"
                        >
                            <MpbMenu>
                                <MpbMenu.Button>
                                    <CgMoreVertical />
                                </MpbMenu.Button>
                                <MpbMenu.Items className="right-8 top-0 ">
                                    <MpbMenu.Item className="flex items-center gap-3 hover:bg-green-50 ">
                                        <FileEdit size={15} color="green" />
                                        <span>Edit User</span>
                                    </MpbMenu.Item>
                                    <MpbMenu.Item className="flex items-center gap-3 hover:bg-red-50">
                                        <RotateCcw size={15} color="red" />
                                        <span>Reset Password</span>
                                    </MpbMenu.Item>{" "}
                                    <MpbMenu.Item className="flex items-center gap-3 hover:bg-red-50">
                                        {row?.original?.status === STATUS.DISABLED && (
                                            <>
                                                <ShieldCheck size={15} color="green" />
                                                <span>Enable User</span>
                                            </>
                                        )}
                                        {row?.original?.status === STATUS.ENABLED && (
                                            <>
                                                <Trash2 size={15} color="red" />
                                                <span>Disable User</span>
                                            </>
                                        )}
                                    </MpbMenu.Item>
                                </MpbMenu.Items>
                            </MpbMenu>
                        </div>
                    );
                },
            },
        ],
        []
    );
    return (
        <div className="w-full px-5">
            <div className=" flex w-full items-center justify-between py-3">
                {/* TODO: refactor this to a breadcrumb components */}
                <nav aria-label="breadcrumb" className="text-base text-gray-500">
                    <ol className="inline-flex items-center space-x-2 py-2 text-sm font-medium">
                        <li className="inline-flex items-center">
                            <Link to="/" className="">
                                Dashboard
                            </Link>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <span className="text-secondary-400">/</span>
                            <Link to="/admin-management" className="">
                                Admin users
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
            {/* Card layout */}
            {/* <div className="mb-20 overflow-auto rounded-md border border-gray-100  p-5 shadow-md"> */}
            <div className="mb-20 mt-4 rounded-md border border-gray-100 px-10 py-5 shadow-md">
                {/* Table UI */}
                <h4 className="mb-2 text-xl font-medium capitalize">role management</h4>
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
                                placeholder="Search by role name..."
                            />
                            <div
                                className="pointer-events-none absolute inset-y-0 
                                right-0 flex items-center  px-2.5 text-gray-500"
                            >
                                <Search size={20} />
                            </div>
                        </div>
                    </div>
                    <MpbButton
                        title="Add New Role"
                        // onClick={() =>
                        //     runDispatch({
                        //         type: ReducerActionType.OPEN_ADD_NEW_USER__MODAL,
                        //     })
                        // }
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={data?.content || defaultData}
                    pagination={pagination}
                    setPagination={setPagination}
                    pageCount={data?.totalPages}
                    totalRecords={data?.totalElements}
                    isLoading={isLoading}
                    pageSizeOptions={[5, 10, 20, 30, 50]}
                />
            </div>
            {/* {isResetPassword && (
                <ResetPasswordModal
                    isOpen={isResetPassword}
                    closeModal={() =>
                        runDispatch({ type: ReducerActionType.CLOSE_RESET_MODAL })
                    }
                    message="Are you sure, you want to reset password ?"
                    onConfirm={() => undefined}
                    showCancelButton
                    backdrop={false}
                    confirmText="Reset"
                    icon="success_lock_icon"
                    showDivider={false}
                    className="px-10"
                />
            )}
            {isDisableUser && (
                <DisableUserModal
                    isOpen={isDisableUser}
                    closeModal={() =>
                        runDispatch({ type: ReducerActionType.CLOSE_DISABLE_MODAL })
                    }
                    message={`Are you sure, you want to ${
                        STATUS.DISABLED === rowData.status ? "enable" : "disable"
                    } this user ?`}
                    onConfirm={handleDisableUser}
                    showCancelButton
                    className={
                        // if status="ENABLED", disable button should show with bg-red
                        // if status="DISABLED", enable button should show with bg-green
                        STATUS.ENABLED === rowData.status
                            ? "bg-red-500 px-10 disabled:bg-red-300"
                            : "px-10"
                    }
                    backdrop={false}
                    // if status="ENABLED", button title is "Disable"
                    // if status="DISABLED", button title is "Enable"
                    confirmText={
                        STATUS.DISABLED === rowData.status ? "Enable" : "Disable"
                    }
                    icon={
                        STATUS.DISABLED === rowData.status
                            ? "success_icon"
                            : "delete_icon"
                    }
                    showDivider={false}
                    isLoading={isDisablingUser}
                />
            )}
            {isNewUser && (
                <ManageAdminModal
                    isOpen={isNewUser}
                    closeModal={() =>
                        runDispatch({ type: ReducerActionType.CLOSE_ADD_NEW_USER__MODAL })
                    }
                    isEdit={isEdit}
                    rowData={rowData}
                />
            )} */}
        </div>
    );
}
