import { useForm } from "react-hook-form";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import useUpdateUser from "@api/user-controller/useUpdateUser";
import { MpbButton, MpbTextField } from "@/components";
import ProfilePics from "@/assets/images/profilepics.png";
import ChangePassword from "./ChangePassword";
import { UserRequestPayload as FormValues } from "@/types/user";
import { useAppSelector } from "@/hooks/useRedux";
import { STATUS, RequestMethod } from "@/types/enum";
import { useToast } from "@/components/ui/toast/use-toast";

export default function Profile() {
    const { toast } = useToast();
    const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
    const user = useAppSelector((state) => state.authReducer.user);
    const { control, handleSubmit, watch } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            email: user?.email,
            firstName: user?.firstname,
            lastName: user?.lastname,
            phone: user?.mobile,
            roles: [],
            username: user?.username,
            status: STATUS.ENABLED,
        },
    });

    const { UpdateUser, isUpdatingUser } = useUpdateUser({
        onSuccess: (res) => {
            toast({
                description: res.data.responseMessage,
            });
            // queryClient.invalidateQueries([queryKeys.GET_USERS]);
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

    const handleProfileUpdate = (values: FormValues) => {
        UpdateUser({
            requestMethod: RequestMethod.PUT,
            requestPayload: values,
            id: user.id,
        });
    };

    return (
        <div className="w-full overflow-auto ">
            {/* TODO: remove line below */}
            <pre className="hidden">{JSON.stringify(user, null, 2)}</pre>
            <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
            <div className="mb-20 ml-20 mt-9 w-full rounded-md border border-gray-100 px-[3.81rem] py-5 pt-[2rem] shadow-md sm:w-[60%]">
                <div className="mt-1">
                    <img
                        src={ProfilePics}
                        alt="profile_picture"
                        className="rounded-full border-4 border-[#006C31]"
                    />
                </div>
                <div className="mb-14 mt-8">
                    <p className="pr-[1.25rem] text-3xl font-semibold text-[#239F5B]">
                        Profile Information
                    </p>
                </div>
                <div>
                    <form className="flex w-full max-w-2xl flex-col gap-8">
                        <div className="flex gap-5">
                            <div className="w-full md:w-1/2">
                                <MpbTextField
                                    label="First name"
                                    name="firstName"
                                    placeholder="Jane"
                                    type="text"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "First name is required",
                                        },
                                    }}
                                    readOnly={isReadOnly}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <MpbTextField
                                    label="Last name"
                                    name="lastName"
                                    placeholder="Joseph"
                                    type="text"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Last name is required",
                                        },
                                    }}
                                    readOnly={isReadOnly}
                                />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-full md:w-1/2">
                                <MpbTextField
                                    label="Phone number"
                                    name="phone"
                                    placeholder="0905634289"
                                    type="number"
                                    icon={<CiUser size={20} />}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Phone number is required",
                                        },
                                    }}
                                    readOnly={isReadOnly}
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <MpbTextField
                                    label="Username"
                                    name="username"
                                    placeholder="Joseph.Susan"
                                    type="text"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Username is required",
                                        },
                                    }}
                                    readOnly={isReadOnly}
                                />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className=" w-full">
                                <MpbTextField
                                    label="Email address"
                                    name="email"
                                    type="email"
                                    placeholder="Susanjoseph@nigerianarmy.com.ng"
                                    icon={<CiUser size={20} />}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                    }}
                                    readOnly={isReadOnly}
                                />
                            </div>
                        </div>
                        {isReadOnly ? (
                            <div className="mt-8">
                                <MpbButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsReadOnly(false);
                                    }}
                                    fullWidth
                                    title="Edit Profile"
                                    variant="primary"
                                />
                            </div>
                        ) : (
                            <div className="mt-8 flex w-full gap-4">
                                <MpbButton
                                    onClick={handleSubmit(handleProfileUpdate)}
                                    fullWidth
                                    title="Save Changes"
                                    variant="primary"
                                    isLoading={isUpdatingUser}
                                    className="w-4/5"
                                />
                                <MpbButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsReadOnly(true);
                                    }}
                                    fullWidth
                                    title="Cancel"
                                    variant="secondary"
                                    className="w-1/5"
                                />
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <ChangePassword userId={user?.id} />
        </div>
    );
}
