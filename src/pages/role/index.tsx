/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-unstable-nested-components */
import { useReducer, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import _ from "lodash";
import { CgMoreVertical } from "react-icons/cg";
import { Trash2, FileEdit, ShieldCheck, ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import CSRDataTable from "@/components/ui/table/CSRDataTable";
import useUpdateRoles from "@/api/role-controller/useUpdateRoles";
import useGetRoles from "@/api/role-controller/useGetRoles";
import queryKeys from "@/api/queryKeys";
import ManageRoleModal from "./ManageRoleModal";
import {
    MpbSweetAlert as DisableRoleModal,
    MpbButton,
    MpbMenu,
    MenuButton,
    MenuItems,
    MenuItem,
    MpbDebounceSearchInput,
} from "@/components";
import { reducer, initialState, ReducerActionType } from "./reducer";
import { useToast } from "@/components/ui/toast/use-toast";
import { STATUS, RequestMethod } from "@/types/enum";
import { IRoleDataContent } from "@/types/role";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib";

export default function Roles() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [state, runDispatch] = useReducer(reducer, initialState);
    const [globalFilter, setGlobalFilter] = useState("");

    const { isDisableRole, isNewRole, rowData, isEdit } = state;

    const { data, isLoading } = useGetRoles({ size: 1_000 });

    const defaultData = useMemo(() => [], []);

    const { UpdateRole: DisableRole, isUpdatingRole: isDisablingRole } = useUpdateRoles({
        onSuccess: (res: any) => {
            toast({
                description: res?.data?.responseMessage,
            });
            queryClient.invalidateQueries([queryKeys.GET_ROLES]);
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

    const handleDisableRole = () => {
        const { id, description, name, permissions, status } = rowData;
        const requestPayload = {
            description,
            name,
            permissions: permissions?.map((item: any) => item.id),
            /**
             * if status is enabled send status request as ("DISABLED")
             * if status is disabled  send status request as ("ENABLED")
             */
            status: status === STATUS.ENABLED ? STATUS.DISABLED : STATUS.ENABLED,
        };
        DisableRole({ requestPayload, requestMethod: RequestMethod.PUT, id });
    };

    const columns = useMemo<ColumnDef<IRoleDataContent>[]>(
        () => [
            // {
            //     accessorKey: "name",
            //     header: "Name",
            // },
            {
                accessorKey: "name",
                header: ({ column }) => {
                    return (
                        <button
                            onClick={() => {
                                column.toggleSorting(column.getIsSorted() === "asc");
                            }}
                            className="flex items-center gap-1"
                        >
                            Name
                            <ArrowUpDown size={15} />
                        </button>
                    );
                },
            },
            {
                accessorKey: "description",
                header: "Description",
                width: "30%",
            },
            {
                accessorKey: "permissions",
                header: "Permission",
                cell: ({ row }) => {
                    return (
                        <div className="grid w-80 grid-cols-3 gap-1 ">
                            {row?.original?.permissions?.map((item) => (
                                <Badge
                                    key={item.name}
                                    variant="info"
                                    className="whitespace-nowrap"
                                >
                                    {_.toLower(item.name)}
                                </Badge>
                            ))}
                        </div>
                    );
                },
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
                                                type: ReducerActionType.OPEN_ADD_NEW_ROLE__MODAL,
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
                                        <span>Edit Role</span>
                                    </MenuItem>
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
                                                <span>Enable Role</span>
                                            </>
                                        )}
                                        {row?.original?.status === STATUS.ENABLED && (
                                            <>
                                                <Trash2 size={15} color="red" />
                                                <span>Disable Role</span>
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
            {/* Card layout  */}
            {/* <div className="mb-20 overflow-auto rounded-md border border-gray-100  p-5 shadow-md">  */}
            <div className="mb-20 mt-4 w-[100%] rounded-md border border-gray-100 px-10 py-5 shadow-md">
                <h4 className="mb-2 text-xl font-medium capitalize">role management</h4>
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
                        title="Add New Role"
                        onClick={() =>
                            runDispatch({
                                type: ReducerActionType.OPEN_ADD_NEW_ROLE__MODAL,
                            })
                        }
                    />
                </div>
                <CSRDataTable
                    columns={columns}
                    data={data?.content || defaultData}
                    totalRecords={data?.totalElements}
                    isLoading={isLoading}
                    pageSizeOptions={[5, 10, 20, 30, 50]}
                    globalFilter={globalFilter}
                    // isFooter={false}
                />
            </div>
            {isDisableRole && (
                <DisableRoleModal
                    isOpen={isDisableRole}
                    closeModal={() =>
                        runDispatch({ type: ReducerActionType.CLOSE_DISABLE_MODAL })
                    }
                    message={`Are you sure, you want to ${
                        STATUS.DISABLED === rowData.status ? "enable" : "disable"
                    } this role ?`}
                    onConfirm={handleDisableRole}
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
                    isLoading={isDisablingRole}
                />
            )}
            {isNewRole && (
                <ManageRoleModal
                    isOpen={isNewRole}
                    closeModal={() =>
                        runDispatch({ type: ReducerActionType.CLOSE_ADD_NEW_ROLE__MODAL })
                    }
                    isEdit={isEdit}
                    rowData={rowData}
                />
            )}
        </div>
    );
}
