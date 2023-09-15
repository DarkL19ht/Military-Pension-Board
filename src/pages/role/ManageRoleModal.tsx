/* eslint-disable no-console */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { CiUser } from "react-icons/ci";
import useUpdateRoles from "@api/role-controller/useUpdateRoles";
import queryKeys from "@api/queryKeys";
import useGetPermissions from "@/api/permission-controller/useGetPermissions";
import MpbModal from "@/components/ui/modal/MpbModal";
import { MpbTextField, MpbButton } from "@/components";
import MpbReactSelectField from "@/components/@form/MpbReactSelectField";
import { useToast } from "@/components/ui/toast/use-toast";
import { IRoleRequestPayload as FormValues, IRoleDataContent } from "@/types/role";
import { RequestMethod } from "@/types/enum";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
    isEdit: boolean;
    rowData: IRoleDataContent;
}

export default function ManageRoleModal({ isOpen, closeModal, isEdit, rowData }: IProps) {
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
            description: "",
            name: "",
            permissions: [],
            status: "",
        },
    });

    // Prefill form field with row Data for update
    useEffect(() => {
        // reset form with row data
        if (isEdit) {
            reset({
                description: rowData?.description,
                name: rowData?.name,
                permissions: rowData?.permissions?.map((item) => ({
                    value: item.id,
                    label: item.name,
                })),
                status: rowData?.status,
            });
        }
    }, [rowData, reset, isEdit]);

    /** apiCalls to get permissions */
    const { data: permissions } = useGetPermissions();

    /** apiCall for create roles  */
    const { UpdateRole, isUpdatingRole } = useUpdateRoles({
        onSuccess: (res) => {
            toast({
                description: res.data.responseMessage,
            });
            queryClient.invalidateQueries([queryKeys.GET_ROLES]);
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
    const handleRole = (values: FormValues) => {
        // remove "status" key from create request
        const { status, ...others } = values;
        const updateRequest = {
            ...values,
            permissions: values.permissions.map((item: { value: string }) => item.value),
        };
        const createRequest = {
            ...others,
            permissions: values.permissions.map((item: { value: string }) => item.value),
        };

        console.log("request", createRequest);
        /** mutate function from useCreateRole */
        UpdateRole({
            requestPayload: isEdit ? updateRequest : createRequest,
            requestMethod: isEdit ? RequestMethod.PUT : RequestMethod.POST,
            id: rowData?.id,
        });
    };
    /**
     * closeModal and reset form field
     */
    const modalTitle = isEdit ? "Update role" : "New role";
    const buttonTitle = isEdit ? "Update role" : "Create new role";

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
                    <div className="flex flex-col gap-1">
                        <MpbTextField
                            label="Role Name"
                            name="name"
                            type="text"
                            icon={<CiUser size={20} />}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Role name is required",
                                },
                            }}
                            placeholder="Enter role name"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <MpbTextField
                            label="Description"
                            name="description"
                            placeholder="Enter Description"
                            type="text"
                            icon={<CiUser size={20} />}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Description is required",
                                },
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-col">
                        <MpbReactSelectField
                            label="Permissions"
                            control={control}
                            name="permissions"
                            options={permissions}
                            isMulti
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please add a permission",
                                },
                            }}
                        />
                    </div>
                    <div className="flex justify-center py-5">
                        <MpbButton
                            title={buttonTitle}
                            onClick={handleSubmit(handleRole)}
                            isLoading={isUpdatingRole}
                            fullWidth
                        />
                    </div>
                </form>
            </div>
        </MpbModal>
    );
}
