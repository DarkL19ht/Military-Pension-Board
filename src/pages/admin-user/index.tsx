/* eslint-disable react/no-unstable-nested-components */
import { useReducer, useState, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { CgMoreVertical } from "react-icons/cg";
import { Search, Trash2, RotateCcw, FileEdit, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import _ from "lodash";
// React Table
import { PaginationState, ColumnDef } from "@tanstack/react-table";
import useUpdateUser from "@/api/user-controller/useUpdateUser";
import queryKeys from "@/api/queryKeys";
import useGetUsers from "@/api/user-controller/useGetUsers";
import DataTable from "./DataTable";
import ManageAdminModal from "./ManageAdminModal";
import {
    MpbSweetAlert as DisableUserModal,
    MpbSweetAlert as ResetPasswordModal,
    MpbButton,
    MpbMenu,
} from "@/components";
import { reducer, initialState, ReducerActionType } from "./reducer";
import appConfig from "@/config";
import { useToast } from "@/components/ui/toast/use-toast";
import { STATUS } from "@/types/enum";

export type Admin = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;
    authorized: boolean;
    status: STATUS;
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
    status: STATUS;
    createdOn: string;
    createdBy: number;
    updatedOn: string;
    updatedBy: number;
};

const getStatusClassName = (status: string, type: "bg" | "text" = "bg"): string => {
    switch (status) {
        case "ENABLED":
            return `${type}-green-500`;
        case "DISABLED":
            return `${type}-red-500`;
        case "PENDING_AUTHORIZATION":
            return `${type}-amber-500`;
        default:
            return "";
    }
};

export default function AdminUsersTable() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { isResetPassword, isDisableUser, isNewUser } = state;
    const [rowData, setRowData] = useState<Admin | Record<string, never>>({});
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

    const { UpdateUser, isUpdatingUser: isDisablingUser } = useUpdateUser({
        onSuccess: (res: any) => {
            toast({
                description: res.data.responseMessage,
            });
            queryClient.invalidateQueries([queryKeys.GET_USERS]);
            runDispatch({ type: ReducerActionType.CLOSE_DISABLE_MODAL });
        },
        onError: (err: any) => {
            const { error, message, responseMessage } = err.response.data;
            toast({
                title: error,
                description: message || responseMessage,
                variant: "error",
            });
        },
    });

    const handleDisableUser = () => {
        const { id, email, firstName, lastName, phone, roles, username, status } =
            rowData;
        const requestPayload = {
            email,
            firstName,
            lastName,
            phone,
            username,
            roles: roles?.map((item) => item.id),
            /**
             * if status is enabled =  status: "DISABLED"
             * if status is disabled  =  status: "ENABLED"
             */
            status: status === STATUS.ENABLED ? STATUS.DISABLED : STATUS.ENABLED,
        };
        UpdateUser({ requestPayload, id });
    };

    const columns = useMemo<ColumnDef<Admin>[]>(
        () => [
            {
                accessorKey: "createdOn",
                header: "Date Added",
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
                accessorKey: "",
                header: "Admin Name",
                cell: ({ row }) => {
                    return (
                        <div className="flex items-center gap-1">
                            <div
                                className={`h-2 w-2 rounded-full ${getStatusClassName(
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
                cell: ({ row }) => {
                    return (
                        <span
                            className={getStatusClassName(row?.original?.status, "text")}
                        >
                            {row?.original?.status}
                        </span>
                    );
                },
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
                cell: ({ row }) => {
                    return (
                        <td
                            className="flex cursor-pointer items-center justify-center 
                            whitespace-nowrap px-2 py-4 text-center text-xs"
                        >
                            <MpbMenu>
                                <MpbMenu.Button>
                                    <CgMoreVertical />
                                </MpbMenu.Button>
                                <MpbMenu.Items className="right-8 top-0 ">
                                    <MpbMenu.Item
                                        onClick={() => {
                                            runDispatch({
                                                type: ReducerActionType.OPEN_RESET_MODAL,
                                            });
                                            setRowData(row?.original);
                                        }}
                                        className="flex items-center gap-3 hover:bg-green-50 "
                                    >
                                        <FileEdit size={15} color="green" />
                                        <span>Edit User</span>
                                    </MpbMenu.Item>
                                    <MpbMenu.Item
                                        onClick={() => {
                                            runDispatch({
                                                type: ReducerActionType.OPEN_RESET_MODAL,
                                            });
                                            setRowData(row?.original);
                                        }}
                                        className="flex items-center gap-3 hover:bg-red-50"
                                    >
                                        <RotateCcw size={15} color="red" />
                                        <span>Reset Password</span>
                                    </MpbMenu.Item>{" "}
                                    <MpbMenu.Item
                                        onClick={() => {
                                            runDispatch({
                                                type: ReducerActionType.OPEN_DISABLE_MODAL,
                                            });
                                            setRowData(row?.original);
                                        }}
                                        className="flex items-center gap-3 hover:bg-red-50"
                                    >
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
                        </td>
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
                <h4 className="mb-2 text-xl font-medium capitalize">admin management</h4>
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
            <DisableUserModal
                isOpen={isDisableUser}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_DISABLE_MODAL })
                }
                message="Are you sure, you want to disable this user ?"
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
                confirmText={STATUS.DISABLED === rowData.status ? "Enable" : "Disable"}
                icon="delete_icon"
                showDivider={false}
                isLoading={isDisablingUser}
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
