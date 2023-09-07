import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { CiUser } from "react-icons/ci";
import useUpdateRoles from "@api/role-controller/useUpdateRoles";
import useGetPermissions from "@api/role-controller/useGetPermissions";
import queryKeys from "@api/queryKeys";
import MpbModal from "@/components/ui/modal/MpbModal";
import { MpbTextField, MpbButton } from "@/components";
import MpbReactSelectField from "@/components/@form/MpbReactSelectField";
import { useToast } from "@/components/ui/toast/use-toast";
import { IRoleRequestPayload as FormValues, IRoleResponsePayload } from "@/types/role";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
    isEdit: boolean;
    rowData: IRoleResponsePayload;
}

export default function ManageRoleModal({ isOpen, closeModal, isEdit, rowData }: IProps) {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const { control, handleSubmit, reset } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            description: "",
            permissions: [],
            name: "",
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

    /** apiCalls to get roles */
    const { PermissionResponse } = useGetPermissions();
    /** apiCall for create roles  */
    const { UpdateRole, isUpdatingRole } = useUpdateRoles({
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
    const handleRole = (values: FormValues) => {
        // remove "status" key from create request
        const { status, ...others } = values;
        const updateRequest = {
            ...values,
            permissions: values.permissions.map((item) => item.value),
        };
        const createRequest = {
            ...others,
            permissions: values.permissions.map((item) => item.value),
        };
        /** mutate function from useCreateRole */
        UpdateRole({
            requestPayload: isEdit ? updateRequest : createRequest,
            requestMethod: isEdit ? "PUT" : "POST",
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
                            options={PermissionResponse}
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
