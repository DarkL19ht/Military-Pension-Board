import Logo from "../assets/logo.png";
import Input from "../components/FormField/Input";
import { CiUser, CiLock } from "react-icons/ci";

const Login = () => {
  return (
    <div className="bg-[#ffffff] h-screen w-full flex items-start">
      <div className="h-full relative w-1/3 bg-[#7ad7a4]"></div>
      <div className="h-full relative w-2/3 bg-[#ffffff] font-latoRegular">
        <div className="flex items-center justify-between mt-[37px] mx-[21px] mb-[70px]">
          <img src={Logo} alt="logo_image" width={35} height={35} />
          <div className="font-latoRegular">Having troubles? Get help</div>
        </div>
        <div className="text-center text-[25px] font-[600] font-latoRegular leading-normal text-[#000000]">
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
              <div className="cursor-pointer flex items-center gap-x-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-[20px] h-[20px]"
                />
                <span className="text-[#00873D]">Remember me</span>
              </div>
              <div className="">
                Forgot password?{" "}
                <span className="text-[#00873D]">Reset here</span>
              </div>
            </div>
            <button
              className={`bg-[#00873D] inline-flex items-center w-full justify-center px-10 py-6 rounded-lg h-[40px] mt-[50px] text-[#ffffff]`}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
