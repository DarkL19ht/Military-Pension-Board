/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-unstable-nested-components */
import { useReducer, useState, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { CgMoreVertical } from "react-icons/cg";
import { Trash2, RotateCcw, FileEdit, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";
import _ from "lodash";
// React Table
import { PaginationState, ColumnDef } from "@tanstack/react-table";
import useUpdateUser from "@/api/user-controller/useUpdateUser";
import queryKeys from "@/api/queryKeys";
import useGetUsers from "@/api/user-controller/useGetUsers";
import useForgetPassword from "@/api/user-controller/useForgetPassword";
import SSRDataTable from "@/components/ui/table/SSRDataTable";
import ManageAdminModal from "./ManageAdminModal";
import {
    MpbSweetAlert as DisableUserModal,
    MpbSweetAlert as ResetPasswordModal,
    MpbButton,
    MpbMenu,
    MenuButton,
    MenuItems,
    MenuItem,
    MpbDebounceSearchInput,
} from "@/components";
import { reducer, initialState, ReducerActionType } from "./reducer";
import appConfig from "@/config";
import { useToast } from "@/components/ui/toast/use-toast";
import { STATUS, RequestMethod } from "@/types/enum";
import { IUserDataContent } from "@/types/user";
import { cn } from "@/lib";

export default function AdminUsersTable() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [state, runDispatch] = useReducer(reducer, initialState);
    const [globalFilter, setGlobalFilter] = useState("");
    const { isResetPassword, isDisableUser, isNewUser, rowData, isEdit } = state;
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: appConfig?.defaultPageSize,
    });

    const fetchDataOptions = {
        page: pageIndex + 1,
        size: pageSize,
        name: globalFilter,
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
    /** Enable and disable user action */
    const { UpdateUser: DisableUser, isUpdatingUser: isDisablingUser } = useUpdateUser({
        onSuccess: (res: any) => {
            toast({
                description: res?.data?.responseMessage,
            });
            queryClient.invalidateQueries([queryKeys.GET_USERS]);
            runDispatch({ type: ReducerActionType.CLOSE_DISABLE_MODAL });
        },
        onError: (err: any) => {
            const { error, message, responseMessage } = err?.response?.data;
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
            roles: roles?.map((item: any) => item.id),
            /**
             * if status is enabled send status request as ("DISABLED")
             * if status is disabled  send status request as ("ENABLED")
             */
            status: status === STATUS.ENABLED ? STATUS.DISABLED : STATUS.ENABLED,
        };
        DisableUser({ requestPayload, requestMethod: RequestMethod.PUT, id });
    };

    /** * Reset Password action  */
    const { initiateForgetPassword, isInitiatingForgetPassword } = useForgetPassword({
        onSuccess: async (res) => {
            toast({
                description: res?.data?.responseMessage,
            });
            runDispatch({ type: ReducerActionType.CLOSE_RESET_MODAL });
        },
        onError: (err) => {
            const { error, message, responseMessage } = err.response.data;
            toast({
                title: error,
                description: message || responseMessage,
            });
        },
    });

    const handlePasswordReset = () => {
        initiateForgetPassword({
            email: rowData?.email,
        });
    };

    const columns = useMemo<ColumnDef<IUserDataContent>[]>(
        () => [
            {
                accessorKey: "createdOn",
                header: "Date Added",
                cell: ({ row }) => {
                    const createdDate: string = row.getValue("createdOn");
                    return (
                        <div className="flex flex-col gap-1">
                            <span>{moment(createdDate).format("MMMM Do YYYY")}</span>
                            <span className="text-gray-400">
                                {moment(createdDate).format("dddd, ha")}
                            </span>
                        </div>
                    );
                },
            },
            {
                accessorKey: "",
                header: "Admin Name",
                cell: ({ row }) => {
                    const { firstName, lastName, status } = row?.original;
                    return (
                        <div className="flex items-center gap-1">
                            <div
                                className={cn(
                                    `h-2 w-2 rounded-full`,
                                    STATUS.ENABLED === status && "bg-green-600",
                                    STATUS.DISABLED === status && "bg-red-600"
                                )}
                            />
                            <div className="flex gap-2">
                                <span>{_.startCase(firstName)}</span>
                                <span>{_.startCase(lastName)}</span>
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
                    const rowStatus: string = row.getValue("status");
                    return (
                        <span
                            className={cn(
                                STATUS.ENABLED === rowStatus && "text-green-500",
                                STATUS.DISABLED === rowStatus && "text-red-500"
                            )}
                        >
                            {rowStatus}
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
                            {row?.original?.roles?.map((item) => (
                                <span
                                    key={item.name}
                                    className="whitespace-nowrap rounded-full bg-blue-100/80 px-2 py-1 
                                    text-center text-xs font-semibold text-blue-500"
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
                        <div
                            className="flex cursor-pointer items-center justify-center 
                            whitespace-nowrap px-2 py-4 text-center text-xs"
                        >
                            <MpbMenu>
                                <MenuButton>
                                    <CgMoreVertical />
                                </MenuButton>
                                <MenuItems className="right-8 top-0 ">
                                    <MenuItem
                                        onClick={() => {
                                            runDispatch({
                                                type: ReducerActionType.OPEN_ADD_NEW_USER__MODAL,
                                            });
                                            runDispatch({
                                                type: ReducerActionType.SET_FORM_DATA,
                                                payload: row?.original,
                                            });
                                            runDispatch({
                                                type: ReducerActionType.SET_IS_EDIT,
                                            });
                                        }}
                                        className="flex items-center gap-3 hover:bg-green-50 "
                                    >
                                        <FileEdit size={15} color="green" />
                                        <span>Edit User</span>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            runDispatch({
                                                type: ReducerActionType.OPEN_RESET_MODAL,
                                                payload: row?.original,
                                            });
                                        }}
                                        className="flex items-center gap-3 hover:bg-red-50"
                                    >
                                        <RotateCcw size={15} color="red" />
                                        <span>Reset Password</span>
                                    </MenuItem>{" "}
                                    <MenuItem
                                        onClick={() => {
                                            runDispatch({
                                                type: ReducerActionType.OPEN_DISABLE_MODAL,
                                                payload: row?.original,
                                            });
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
                                    </MenuItem>
                                </MenuItems>
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
            {/* <div className="mb-20 overflow-auto rounded-md border border-gray-100  p-5 shadow-md"> */}
            <div className="mb-20 mt-4 rounded-md border border-gray-100 px-10 py-5 shadow-md">
                {/* Table UI */}
                <h4 className="mb-2 text-xl font-medium capitalize">admin management</h4>
                <div className="flex justify-between py-5">
                    <div className="w-[30%] max-w-sm">
                        <MpbDebounceSearchInput
                            placeholder="Search by pensioner's name..."
                            value={globalFilter ?? ""}
                            onChange={(value) => setGlobalFilter(String(value))}
                            debounce={1000}
                        />
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
                <SSRDataTable
                    columns={columns}
                    data={data?.content || defaultData}
                    pagination={pagination}
                    setPagination={setPagination}
                    setGlobalFilter={setGlobalFilter}
                    globalFilter={globalFilter}
                    pageCount={data?.totalPages}
                    totalRecords={data?.totalElements}
                    isLoading={isLoading}
                    pageSizeOptions={[5, 10, 20, 30, 50, 100, 300]}
                />
            </div>
            {isResetPassword && (
                <ResetPasswordModal
                    isOpen={isResetPassword}
                    closeModal={() =>
                        runDispatch({ type: ReducerActionType.CLOSE_RESET_MODAL })
                    }
                    message="Are you sure, you want to reset password ?"
                    onConfirm={() => handlePasswordReset()}
                    showCancelButton
                    backdrop={false}
                    confirmText="Reset"
                    icon="success_lock_icon"
                    showDivider={false}
                    className="px-10"
                    isLoading={isInitiatingForgetPassword}
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
            )}
        </div>
    );
}
