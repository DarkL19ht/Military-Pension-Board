import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import MpbBreadcrumb from "@/components/ui/MpbBreadcrumb";
import breadcrumb from "@/lib/breadcrumb";
import { MpbTextField, MpbButton } from "@/components";
import MpbReactSelectField from "@/components/@form/MpbReactSelectField";

type FormValues = {
    email: string;
    roleName: string;
    lastName: string;
    phone: string;
    gender: string;
    roles: number[];
    username: string;
    rank: string;
};

const permissions = [
    {
        label: "View Reports",
        value: "View Reports",
    },
    {
        label: "Onboard Pensioners",
        value: "Onboard Pensioners",
    },
    {
        label: "View Permissions Information",
        value: "View Permissions Information",
    },
];

export default function CreateAdminRoles() {
    const { control } = useForm<FormValues>({
        mode: "all",
        defaultValues: {
            roleName: "",
            permissions: "",
        },
    });

    return (
        <div className="mx-auto w-4/5">
            <div className="mb-2 flex w-full justify-between py-3">
                <MpbBreadcrumb data={breadcrumb?.create_admin_role} />
            </div>
            <p className="mb-5 mt-3 text-center text-lg font-semibold md:w-[75%]">
                Create Admin Role
            </p>
            <div
                className="mb-20 w-full rounded-md border
                border-gray-100 p-5  shadow-md sm:w-[75%]"
            >
                <form className="w-full space-y-5">
                    <div className="flex gap-3">
                        <div className="w-full">
                            <MpbTextField
                                label="Role Name"
                                name="roleName"
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
                    <div className="flex justify-center">
                        <MpbButton title="Save" />
                    </div>
                </form>
            </div>
        </div>
    );
}
