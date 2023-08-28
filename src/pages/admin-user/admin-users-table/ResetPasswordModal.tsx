import { useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import MpbModal from "@/components/ui/MpbModal";
import { MpbTextField, MpbButton } from "@/components";

interface IProps {
    isOpen: boolean;
    closeModal: () => void;
}

type FormValues = {
    password: string;
    confirmPassword: string;
};

export default function ResetPasswordModal({ isOpen, closeModal }: IProps) {
    const {
        control,
        // handleSubmit,
        // formState: { errors, isValid, isDirty },
        // formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    return (
        <MpbModal title="Reset Password" isOpen={isOpen} closeModal={closeModal}>
            <div className="p-5">
                <form action="">
                    <div className="mb-10 w-full">
                        <MpbTextField
                            label="New Password"
                            name="password"
                            type="password"
                            icon={<CiLock size={20} />}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                            }}
                        />
                    </div>
                    <div className="mb-5 w-full">
                        <MpbTextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            icon={<CiLock size={20} />}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Confirm password is required",
                                },
                            }}
                        />
                    </div>
                    <div className="mt-8">
                        <MpbButton
                            type="submit"
                            title="Update Password"
                            // isLoading={isLoginUser}
                            variant="default"
                            size="sm"
                            fullWidth
                            // onClick={handleSubmit(handleAuthentication)}
                            // disabled={!isDirty || !isValid}
                            // disabled={isLoginUser}
                        />
                    </div>
                </form>
            </div>
        </MpbModal>
    );
}
