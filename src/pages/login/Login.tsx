import { CiUser, CiLock } from "react-icons/ci";
import Logo from "@/assets/logo.png";
import Input from "@/components/FormField/Input";
import BannerImage from "@/assets/soldierimage.jpg";

function Login() {
    return (
        <div className="flex h-screen w-full items-start overflow-hidden bg-[#ffffff]">
            <div className="relative h-full w-1/3">
                <img src={BannerImage} alt="soldier_image" className="h-full w-full" />
            </div>
            <div className="relative h-full w-2/3 bg-[#ffffff] font-latoRegular">
                <div className="mx-[21px] mb-[70px] mt-[37px] flex items-center justify-between">
                    <img src={Logo} alt="logo_image" width={35} height={35} />
                    <h1 className="font-latoRegular">Having troubles? Get help</h1>
                </div>
                <div className="text-center font-latoRegular text-[25px] font-[600] leading-normal text-[#000000]">
                    Login to Military Pension Board
                </div>
                <div className="mx-[215px]">
                    <form className="mt-[40px]">
                        <Input
                            label="Username"
                            name="username"
                            type="text"
                            id="username"
                            icon={CiUser}
                            iconSize={20}
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            id="password"
                            icon={CiLock}
                            iconSize={20}
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex cursor-pointer items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="h-[20px] w-[20px]"
                                />
                                <span className="text-[#00873D]">Remember me</span>
                            </div>
                            <div className="">
                                Forgot password?{" "}
                                <span className="text-[#00873D]">Reset here</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mt-[50px] inline-flex h-[40px] w-full items-center justify-center rounded-lg bg-[#00873D] px-10 py-6 text-[#ffffff]"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
