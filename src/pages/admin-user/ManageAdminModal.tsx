import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { CiUser } from "react-icons/ci";
import useUpdateUser from "@api/user-controller/useUpdateUser";
import useGetRoles from "@api/role-controller/useGetRoles";
import queryKeys from "@api/queryKeys";
import MpbModal from "@/components/ui/modal/MpbModal";
import { MpbTextField, MpbButton } from "@/components";
import MpbReactSelectField from "@/components/@form/MpbReactSelectField";
import { useToast } from "@/components/ui/toast/use-toast";
import { UserRequestPayload as FormValues, IUserDataContent } from "@/types/user";
import { RequestMethod } from "@/types/enum";
import { VALIDATE_NAME, VALIDATE_EMAIL } from "@/lib/validators";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
    isEdit: boolean;
    rowData: IUserDataContent;
}

export default function ManageAdminModal({
    isOpen,
    closeModal,
    isEdit,
    rowData,
}: IProps) {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const {
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            roles: [],
            username: "",
            status: "",
        },
    });
    // Prefill form field with row Data for update
    useEffect(() => {
        // reset form with row data
        if (isEdit) {
            reset({
                email: rowData?.email,
                firstName: rowData?.firstName,
                lastName: rowData?.lastName,
                phone: rowData?.phone,
                roles: rowData?.roles?.map((item) => ({
                    value: item.id,
                    label: item.name,
                })),
                status: rowData?.status,
                username: rowData?.username,
            });
        }
    }, [rowData, reset, isEdit]);

    /** apiCalls to get roles */
    const { data } = useGetRoles();
    const RoleResponse = data?.content?.map((item: { id: number; name: string }) => ({
        value: item.id,
        label: item.name,
    }));
    /** apiCall for create admin user  */
    const { UpdateUser, isUpdatingUser } = useUpdateUser({
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
    const handleAdminUser = (values: FormValues) => {
        // remove "status" key from create request
        const { status, ...others } = values;
        const updateRequest = {
            ...values,
            roles: values.roles.map((item: any) => item.value),
        };
        const createRequest = {
            ...others,
            roles: values.roles.map((item: any) => item.value),
        };
        /** mutate function from useCreateUser */
        UpdateUser({
            requestPayload: isEdit ? updateRequest : createRequest,
            requestMethod: isEdit ? RequestMethod.PUT : RequestMethod.POST,
            id: rowData?.id,
        });
    };
    /**
     * closeModal and reset form field
     */
    const modalTitle = isEdit ? "Update admin user" : "New admin user";
    const buttonTitle = isEdit ? "Update user" : "Create new user";

    return (
        <MpbModal
            showDivider={false}
            title={modalTitle}
            isOpen={isOpen}
            closeModal={closeModal}
            size="lg"
        >
            <div className="px-5 py-5">
                <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
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
                                    validate: VALIDATE_NAME,
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
                                    validate: VALIDATE_NAME,
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
                                validate: VALIDATE_NAME,
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
                                pattern: VALIDATE_EMAIL,
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
                            title={buttonTitle}
                            onClick={handleSubmit(handleAdminUser)}
                            isLoading={isUpdatingUser}
                            fullWidth
                        />
                    </div>
                </form>
            </div>
        </MpbModal>
    );
}
