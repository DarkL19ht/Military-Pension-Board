// import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import useCreateUser from "@api/user-controller/useCreateUser";
import MpbModal from "@/components/ui/modal/MpbModal";
import { MpbTextField, MpbButton } from "@/components";
import MpbReactSelectField from "@/components/@form/MpbReactSelectField";
// import { useToast } from "@/components/ui/use-toast";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

interface FormValues {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender: string;
    roles: string[];
    username: string;
}

export default function ManageAdminModal({ isOpen, closeModal }: IProps) {
    // const { toast } = useToast()
    const {
        control,
        handleSubmit,
        watch,
        // formState: { errors, isValid, isDirty },
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            gender: "",
            roles: [],
            username: "",
            rank: "",
        },
    });

    const { CreateUser, isCreatingUser } = useCreateUser();

    const handleCreateUser = (values: FormValues) => {
        CreateUser(values);
    };

    // const handleToaster = (e)=> {
    //     e.preventDefault()
    //      toast({
    //          title: "Scheduled: Catch up",
    //          description: "Friday, February 10, 2023 at 5:57 PM",
    //          variant: "warning"
    //      });
    // }

    return (
        <MpbModal
            showDivider={false}
            title="new admin user"
            isOpen={isOpen}
            closeModal={closeModal}
            size="lg"
        >
            <div className="px-5 pb-5">
                <form className="w-full space-y-5">
                    {/* TODO: remove below */}
                    <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                    <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
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
                            label="Phone number"
                            name="phoneNumber"
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
                            name="role"
                            options={[]}
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
