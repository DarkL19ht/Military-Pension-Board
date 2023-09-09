import { Link } from "react-router-dom";
import { MpbButton } from "@/components";

export default function RolesAndPermissions() {
    return (
        <div className="w-full px-5">
            <div className=" flex w-full items-center justify-between py-3">
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
                                to="/admin-management"
                                className="text-secondary-500 hover:text-secondary-600"
                            >
                                Admin users
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
            {/* Card layout */}
            <div className="mb-20 mt-4 rounded-md border border-gray-100 px-10 py-5 shadow-md">
                {/* Roles and Permissions tabs */}
                <div className="flex justify-between py-5">
                    <div className="w-[30%] max-w-sm">
                        <h4 className="mb-2 text-xl font-medium">
                            Roles and Permissions
                        </h4>
                    </div>
                    <MpbButton title="Add New Roles" />
                </div>
            </div>
            {/* create modal goes here */}
            {/* <ResetPasswordModal
                isOpen={isResetPassword}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_RESET_MODAL })
                }
            /> */}
            {/* <DisableUserModal
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
            /> */}
            {/* <ChangeRoleModal
                isOpen={isChangeRole}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_CHANGE_ROLE_MODAL })
                }
            /> */}
            {/* <ManageAdminModal
                isOpen={isNewUser}
                closeModal={() =>
                    runDispatch({ type: ReducerActionType.CLOSE_ADD_NEW_USER__MODAL })
                }
            /> */}
        </div>
    );
}
