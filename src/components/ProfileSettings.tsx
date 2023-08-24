import ProfilePics from '../assets/profilepics.png';
import { PiPencilSimpleLine } from 'react-icons/pi';

const ProfileSettings = () => {
  return (
    <div className="p-[4.81rem]">
      <h4 className="text-[#00873D] text-2xl font-bold">Profile Settings</h4>
      <div className="mt-6">
        <img
          src={ProfilePics}
          alt="profile_picture"
          className="border-4 border-[#006C31] rounded-full"
        />
      </div>
      <div className="mt-[3rem] mb-[2.3rem] flex">
        <p className="text-[#239F5B] text-base font-semibold pr-[1.25rem] underline">
          Profile Information
        </p>
        <p className="flex cursor-pointer">
          Edit{' '}
          <span>
            <PiPencilSimpleLine className="mt-[0.3rem]" />
          </span>
        </p>
      </div>
      <div>
        <form className="w-full max-w-2xl">
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="first-name"
              >
                First name
              </label>
              <input
                className="appearance-none block w-full bg-white text-[#3D3333] border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                id="first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="last-name"
              >
                Last name
              </label>
              <input
                className="appearance-none block w-full bg-white text-[#3D3333] border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                id="last-name"
                type="text"
                placeholder="Joseph"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="rank"
              >
                Rank
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-white border border-[#D8D7D7] text-gray-700 py-4 px-4 pr-8 rounded-[0.8125rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                  id="rank"
                >
                  <option>Colonel</option>
                  <option>Colonel</option>
                  <option>Colonel</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="phone-number"
              >
                Phone number
              </label>
              <input
                className="appearance-none block w-full bg-white text-white border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                id="phone-number"
                type="text"
                placeholder="0905634289"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="email-address"
              >
                Email address
              </label>
              <input
                className="appearance-none block w-full bg-white text-white border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                id="email-address"
                type="text"
                placeholder="Susanjoseph@nigerianarmy.com.ng"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <input
                className="appearance-none block w-full bg-white text-white border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                id="gender"
                type="text"
                placeholder="Female"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-white text-white border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                id="address"
                type="password"
                placeholder="Military barracks Ikeja cantoment"
              />
            </div>
          </div>
          <p className="text-[#239F5B] text-base font-semibold pr-[1.25rem] underline mt-[2.7rem] mb-3">
            Change password
          </p>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <label
              className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
              htmlFor="old-password"
            >
              Old password
            </label>
            <input
              className="appearance-none block w-full bg-white text-[#3D3333] border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
              id="old password"
              type="password"
              placeholder="*********************"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="new password"
              >
                New password
              </label>
              <input
                className="appearance-none block w-full bg-white text-[#3D3333] border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                id="new-password"
                type="password"
                placeholder="*****************"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide before:content-['*'] before:ml-0.5 before:text-red-500 text-sm font-medium text-slate-700 pb-2"
                htmlFor="confirm-password"
              >
                Confirm password
              </label>
              <input
                className="appearance-none block w-full bg-white text-[#3D3333] border border-[#D8D7D7] rounded-[0.8125rem] py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-[#3D3333]"
                id="confirm-password"
                type="password"
                placeholder="*****************"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className={`bg-[#00873D] inline-flex items-center w-64 justify-center px-10 py-6 rounded-lg h-[40px] mt-[50px] text-[#ffffff]`}
            >
              Submit password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
