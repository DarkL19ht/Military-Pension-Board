import { useReducer } from "react";
import { CgMoreVertical } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdLockReset } from "react-icons/md";
import Pagination from "@/components/Pagination/Pagination";
import { adminData } from "@/lib/fakers";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ResetPasswordModal from "./ResetPasswordModal";
import ChangeRoleModal from "./ChangeRoleModal";
import { MpbSweetAlert, buttonVariants } from "@/components";
import { reducer, initialState } from "./reducer";

export default function AdminUsersTable() {
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { isResetPassword, isDisableUser, isChangeRole } = state;

    return (
        <div className="w-4/5 pl-10">
            <div className="mb-2 flex w-full items-center justify-between py-3">
                {/* Breacrumb */}
                <nav aria-label="breadcrumb" className="text-base text-gray-500">
                    <ol className="inline-flex items-center space-x-2 py-2 text-sm font-medium">
                        <li className="inline-flex items-center">
                            <Link
                                to="/"
                                className="text-secondary-500 hover:text-secondary-600"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <span className="text-secondary-400">/</span>
                            <Link
                                to="/"
                                className="text-secondary-500 hover:text-secondary-600"
                            >
                                Admin users
                            </Link>
                        </li>
                    </ol>
                </nav>
                <div className="flex">
                    <Link
                        to="/manage-admin/add-admin-users"
                        className={buttonVariants({ variant: "default" })}
                    >
                        Add new users
                    </Link>
                </div>
            </div>
            {/* Card layout */}
            <div className="mb-20 overflow-auto rounded-md border border-gray-100  p-5 shadow-md">
                {/* Table UI */}
                <table className="w-full border border-gray-300 text-left font-light">
                    <thead className="t border-b bg-[#F2FAF5] font-medium">
                        <tr className="text-[#00873D]">
                            <th scope="col" className="px-2 py-4 text-center text-sm">
                                S/N
                            </th>
                            <th scope="col" className="px-2 py-4 text-center text-sm ">
                                Username
                            </th>
                            <th scope="col" className="px-2 py-4 text-center text-sm">
                                Reference ID
                            </th>
                            <th scope="col" className="px-2 py-4 text-center text-sm">
                                Created At
                            </th>
                            <th scope="col" className="px-2 py-4 text-center text-sm">
                                Role
                            </th>
                            <th scope="col" className="px-2 py-4 text-center text-sm">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminData?.map((item) => {
                            return (
                                <tr className="border-b" key={item.id}>
                                    <td className="whitespace-nowrap px-2 py-4 text-center text-xs font-medium">
                                        {item.id}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-4  text-center text-xs">
                                        {item.username}
                                    </td>
                                    <td className="t whitespace-nowrap px-2 py-4 text-center text-xs">
                                        {item.referenceId}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-4  text-center text-xs">
                                        {item.createdAt}
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-4 text-center text-xs">
                                        {item.role}
                                    </td>
                                    <td className="flex cursor-pointer items-center justify-center whitespace-nowrap px-2 py-4 text-center text-xs">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <CgMoreVertical />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="flex w-full flex-col text-gray-500">
                                                <DropdownMenuItem>
                                                    <button
                                                        type="button"
                                                        className="flex w-full items-center gap-x-3 py-2"
                                                        onClick={() =>
                                                            runDispatch({
                                                                type: "openResetModal",
                                                            })
                                                        }
                                                    >
                                                        <MdLockReset />
                                                        <span>Reset Password</span>
                                                    </button>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <button
                                                        type="button"
                                                        className="flex w-full items-center gap-x-3  py-2"
                                                        onClick={() =>
                                                            runDispatch({
                                                                type: "openChangeRoleModal",
                                                            })
                                                        }
                                                    >
                                                        <MdLockReset />
                                                        <span>Change Role</span>
                                                    </button>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <button
                                                        type="button"
                                                        className="group flex w-full items-center gap-x-3 py-2 hover:text-red-400"
                                                        onClick={() =>
                                                            runDispatch({
                                                                type: "openDisableModal",
                                                            })
                                                        }
                                                    >
                                                        <MdLockReset
                                                            size={20}
                                                            className="group-hover:text-red-400"
                                                        />
                                                        <span className="group-hover:text-red-500">
                                                            Disable User
                                                        </span>
                                                    </button>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="py-2">
                    <Pagination />
                </div>
            </div>
            {/* create modal goes here */}
            <ResetPasswordModal
                isOpen={isResetPassword}
                closeModal={() => runDispatch({ type: "closeResetModal" })}
            />
            <MpbSweetAlert
                isOpen={isDisableUser}
                closeModal={() => runDispatch({ type: "closeDisableModal" })}
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
                closeModal={() => runDispatch({ type: "closeChangeRoleModal" })}
            />
        </div>
    );
}
