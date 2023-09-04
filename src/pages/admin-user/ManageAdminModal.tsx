// import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { CiUser } from "react-icons/ci";
import useCreateUser from "@api/user-controller/useCreateUser";
import useGetRoles from "@api/role-controller/useGetRoles";
import queryKeys from "@api/queryKeys";
import MpbModal from "@/components/ui/modal/MpbModal";
import { MpbTextField, MpbButton } from "@/components";
import MpbReactSelectField from "@/components/@form/MpbReactSelectField";
import { useToast } from "@/components/ui/toast/use-toast";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

interface FormValues {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    roles: number[];
    username: string;
}

export default function ManageAdminModal({ isOpen, closeModal }: IProps) {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const { control, handleSubmit, reset } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            roles: [],
            username: "",
        },
    });
    /** apiCalls to get roles */
    const { RoleResponse } = useGetRoles();
    /** apiCall for create admin user  */
    const { CreateUser, isCreatingUser } = useCreateUser({
        onSuccess: (res) => {
            toast({
                description: res.data.responseMessage,
            });
            queryClient.invalidateQueries([queryKeys.GET_USERS]);
            closeModal();
        },
        onError: (err) => {
            const { error, message, responseMessage } = err.response.data;
            toast({
                title: error,
                description: message || responseMessage,
                variant: "error",
            });
        },
    });
    const handleCreateUser = (values: FormValues) => {
        const requestPayload = {
            ...values,
            roles: values.roles.map((item) => item.value),
        };
        /** mutate function from useCreateUser */
        CreateUser(requestPayload);
    };
    /**
     * closeModal and reset form field
     */
    const handleCloseModal = () => {
        reset();
        closeModal();
    };

    return (
        <MpbModal
            showDivider={false}
            title="new admin user"
            isOpen={isOpen}
            closeModal={handleCloseModal}
            size="lg"
        >
            <div className="px-5 pb-5">
                <form className="w-full space-y-5">
                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <MpbTextField
                                label="First name"
                                name="firstName"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "First name is required",
                                    },
                                }}
                            />
                        </div>
                        <div className="w-1/2">
                            <MpbTextField
                                label="Last name"
                                name="lastName"
                                type="text"
                                icon={<CiUser size={20} />}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Last name is required",
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <MpbTextField
                            label="Username"
                            name="username"
                            type="text"
                            icon={<CiUser size={20} />}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "username is required",
                                },
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <MpbTextField
                            label="Phone number"
                            name="phone"
                            placeholder="Enter Phone Number"
                            type="number"
                            icon={<CiUser size={20} />}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Phone number is required",
                                },
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <MpbTextField
                            label="Email address"
                            name="email"
                            type="email"
                            icon={<CiUser size={20} />}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-col">
                        <MpbReactSelectField
                            label="Roles"
                            control={control}
                            name="roles"
                            options={RoleResponse}
                            isMulti
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please choose a role",
                                },
                            }}
                        />
                    </div>
                    <div className="flex justify-center py-5">
                        <MpbButton
                            title="Create new user"
                            onClick={handleSubmit(handleCreateUser)}
                            isLoading={isCreatingUser}
                            fullWidth
                        />
                    </div>
                </form>
            </div>
        </MpbModal>
    );
}
