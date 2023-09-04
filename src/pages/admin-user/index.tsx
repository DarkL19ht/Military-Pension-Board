import { useReducer, useState, useMemo } from "react";
import moment from "moment";
import { CgMoreVertical } from "react-icons/cg";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import _ from "lodash";
// import { MdLockReset } from "react-icons/md";
// React Table
import { PaginationState, ColumnDef } from "@tanstack/react-table";
// Table
import useGetUsers from "@api/user-controller/useGetUsers";
import DataTable from "./DataTable";
import ResetPasswordModal from "./ResetPasswordModal";
import ChangeRoleModal from "./ChangeRoleModal";
import ManageAdminModal from "./ManageAdminModal";
import { MpbSweetAlert as DisableUserModal, MpbButton } from "@/components";
import { reducer, initialState, ReducerActionType } from "./reducer";
import appConfig from "@/config";

export type Admin = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;
    authorized: boolean;
    status: "ENABLED" | "DISABLED";
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
    roles: Role[];
};

type Role = {
    id: number;
    name: string;
    description: string;
    authorized: boolean;
    status: "DISABLED";
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
};

const getStatus = (status: string): string => {
    switch (status) {
        case "ENABLED":
            return "bg-green-500";
        case "DISABLED":
            return "bg-red-500";
        case "PENDING_AUTHORIZATION":
            return "bg-amber-500";
        default:
            return "";
    }
};

export const columns: ColumnDef<Admin>[] = [
    {
        accessorKey: "createdOn",
        header: "Date Added",
        cell: ({ row }) => {
            return (
                <div className="flex flex-col gap-1">
                    <span>{moment(row?.original?.createdOn).format("MMMM Do YYYY")}</span>
                    <span className="text-gray-400">
                        {moment(row?.original?.createdOn).format("dddd, ha")}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: "",
        header: "Admin Name",
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-1">
                    <div
                        className={`h-2 w-2 rounded-full ${getStatus(
                            row?.original?.status
                        )}`}
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
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone Number",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "role",
        header: "Roles",
        cell: ({ row }) => {
            return (
                <div className="flex flex-col gap-2">
                    {row?.original?.roles.map((item) => (
                        <span
                            key={item.name}
                            className="whitespace-nowrap rounded-full bg-blue-100/80 px-2 py-1 text-center text-xs font-semibold text-blue-500"
                        >
                            {" "}
                            {_.toLower(item.name)}
                        </span>
                    ))}
                </div>
            );
        },
    },
    {
        // accessorKey: "",
        header: "Action",
        id: "Action",
        cell: () => {
            return (
                <td
                    className="flex cursor-pointer items-center justify-center 
                    whitespace-nowrap px-2 py-4 text-center text-xs"
                >
                    <CgMoreVertical />
                </td>
            );
        },
    },
];

export default function AdminUsersTable() {
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { isResetPassword, isDisableUser, isChangeRole, isNewUser } = state;
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: appConfig.defaultPageSize,
    });

    const fetchDataOptions = {
        pageNumber: pageIndex + 1,
        size: pageSize,
    };

    const { data, isLoading } = useGetUsers(fetchDataOptions);

    const defaultData = useMemo(() => [], []);

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
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
                <h4 className="mb-2 text-xl font-medium capitalize">admin management</h4>
                <div className="flex justify-between py-5">
                    <div className="w-[30%] max-w-sm">
                        <div className="group relative">
                            {/* Refactor this to a SearchInput components */}
                            <input
                                type="text"
                                id="example9"
                                className="focus:border-primary-400 focus:ring-primary-200 
                                block w-full rounded-md border-gray-300 py-2 pr-10 
                                shadow-sm outline-none transition-all placeholder:text-sm
                                hover:bg-gray-50
                                "
                                placeholder="Search by admin's name..."
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
                        title="Add Admin User"
                        onClick={() =>
                            runDispatch({
                                type: ReducerActionType.OPEN_ADD_NEW_USER__MODAL,
                            })
                        }
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
            {/* create modal goes here */}
            <ResetPasswordModal
                isOpen={isResetPassword}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_RESET_MODAL })
                }
            />
            <DisableUserModal
                isOpen={isDisableUser}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_DISABLE_MODAL })
                }
                message="Are you you want to disable this user"
                onConfirm={() => undefined}
                bgTitle="primary"
                title="Admin user"
                showCloseButton
                showCancelButton
                className="bg-red-500"
                backdrop={false}
                confirmText="Disable admin"
            />
            <ChangeRoleModal
                isOpen={isChangeRole}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_CHANGE_ROLE_MODAL })
                }
            />
            <ManageAdminModal
                isOpen={isNewUser}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_ADD_NEW_USER__MODAL })
                }
            />
        </div>
    );
}
