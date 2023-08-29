import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import PensionerPics from "@/assets/images/pensionerpics.png";
import QrCode from "@/assets/images/QRCode.png";
import Card1 from "@/assets/images/card1.png";
import Card2 from "@/assets/images/card2.png";
import Card3 from "@/assets/images/card3.png";

export default function ViewPensionersProfile() {
    return (
        <div className="mx-auto w-4/5">
            <div className="mb-2 flex w-full justify-between py-3">
                {/* Breacrumb */}
                <nav aria-label="breadcrumb" className="text-base text-gray-500">
                    <ol className="inline-flex items-center space-x-2 py-2 text-sm font-medium">
                        <li className="inline-flex items-center">
                            <Link
                                to="/"
                                className="text-secondary-500 hover:text-secondary-600"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="inline-flex items-center space-x-2">
                            <span className="text-secondary-400">/</span>
                            <Link
                                to="/"
                                className="text-secondary-500 hover:text-secondary-600"
                            >
                                View Pensioner&apos;s Profile
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="mx-auto w-[55%]">
                <div className="flex">
                    <div>
                        <img
                            src={PensionerPics}
                            alt="Pensioner_pics"
                            className="h-24 w-24 rounded-full border-4"
                        />
                        <p className="-mt-6 flex w-36 rounded-lg bg-[#cffce7] p-2.5 opacity-80">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="8"
                                viewBox="0 0 7 8"
                                fill="none"
                                className="mt-3 "
                            >
                                <circle cx="3.5" cy="4" r="3.5" fill="#00873D" />
                            </svg>
                            <span className="ml-2 font-latoBlack text-lg font-normal">
                                Completed
                            </span>
                        </p>
                    </div>
                    <div>
                        <h5 className="mb-4 text-xl font-bold">Josphine Anderson</h5>
                        <div className="flex">
                            <div>
                                <p className="text-sm text-[#535353]">
                                    Rank:
                                    <span className="ml-2 font-medium text-black">
                                        Major General
                                    </span>
                                </p>
                            </div>
                            <div className="ml-6">
                                <p className="text-sm text-[#535353]">
                                    D.O.B:
                                    <span className=" ml-2 font-medium text-black">
                                        12th Aug, 1940
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Tab.Group>
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <Tab.List className="flex justify-between text-lg font-semibold text-[#00873D]">
                        <Tab>Profile Information</Tab>
                        <Tab>Documents Information</Tab>
                    </Tab.List>
                </div>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="mb-4 mt-3 w-full rounded-md p-5 text-base font-medium text-black ">
                            <div className=" mb-4 flex w-full flex-wrap justify-between">
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-2 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">First Name:</p>
                                            <p className="w-3/4">Omolola</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Last Name:</p>
                                            <p className="w-3/4">Dave</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" mb-4 flex w-full flex-wrap justify-between">
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Username:</p>
                                            <p className="w-3/4">Josephine Anderson</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Rank:</p>
                                            <p className="w-3/4">Major General</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mb-4 flex w-full flex-wrap justify-between">
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Phone Number:</p>
                                            <p className="w-3/4">08096789000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Email Address:</p>
                                            <p className="w-3/4">Josephine@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mb-4 flex w-full flex-wrap justify-between">
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Gender:</p>
                                            <p className="w-3/4">Female</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Date of Birth:</p>
                                            <p className="w-3/4">12/08/1940</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mb-4 flex w-full flex-wrap justify-between">
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Address:</p>
                                            <p className="w-3/4">
                                                16, Cole street, Victoria Island
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Status:</p>
                                            <p className="w-3/4">Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mb-4 flex w-full flex-wrap justify-between">
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Account Number:</p>
                                            <p className="w-3/4">00467894329</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">BVN Details:</p>
                                            <p className="w-3/4">222211456789</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mb-4 flex w-full flex-wrap justify-between">
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">Bank Name:</p>
                                            <p className="w-3/4">Stanbic IBTC</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <div className="mb-2 block w-full appearance-none rounded-[0.8125rem] border border-[#D8D7D7] bg-white px-3 py-3 leading-tight text-[#3D3333] placeholder-[#3D3333] focus:border-gray-500 focus:bg-white focus:outline-none">
                                        <div className="flex flex-row">
                                            <p className="w-2/4">NIN</p>
                                            <p className="w-3/4">4708643210976</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-4">
                                See below the access QR code to verify Pensioner&apos;s
                                status and profile completeness
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src={QrCode} alt="qr-code" />
                        </div>
                        <div className="text-center">
                            <p>
                                <p>Reference ID: 345TH78PK45</p>
                            </p>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="my-12">
                            <h5 className="w-fit bg-[#F5FCFC] px-3 py-2.5 text-[#00873D]">
                                Document Attached <span>(3)</span>
                            </h5>
                        </div>
                        <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                            <div className="mb-10">
                                <div className="mb-10 w-full flex-1 overflow-hidden rounded border-b-4  bg-white shadow-lg sm:mx-2 sm:w-[80%] md:mx-1 lg:mx-2 lg:pt-0">
                                    <img src={Card1} alt="Identification_card" />
                                    <div className="flex justify-between bg-[#E5E7EB] p-2 px-10 md:p-3">
                                        <div className="cursor-pointer">View</div>
                                        <div className="cursor-pointer">Download</div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="mr-10">
                                        <p className="text-sm font-medium">
                                            Identification ID Card:
                                        </p>
                                        <p className="text-xs">Driver’s License</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium">
                                            ID Card Number:
                                        </p>
                                        <p className="text-xs">8656466366</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-10">
                                <div className="mb-10 w-full flex-1 overflow-hidden rounded border-b-4  bg-white shadow-lg sm:mx-2 sm:w-[80%] md:mx-1 lg:mx-2 lg:pt-0">
                                    <img src={Card2} alt="utility_bill" />
                                    <div className="flex justify-between bg-[#E5E7EB] p-2 px-10 md:p-3">
                                        <div className="cursor-pointer">View</div>
                                        <div className="cursor-pointer">Download</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-medium">Utility Bill:</p>
                                    <p className="text-xs">House utility bill.jpg</p>
                                </div>
                            </div>
                            <div className="mb-10">
                                <div className="mb-10 w-full flex-1 overflow-hidden rounded border-b-4 bg-white shadow-lg sm:mx-2 sm:w-[80%] md:mx-1 lg:mx-2 lg:pt-0">
                                    <img src={Card3} alt="passport_photo" />
                                    <div className="flex justify-between bg-[#E5E7EB] p-2 px-10 md:p-3">
                                        <div className="cursor-pointer">View</div>
                                        <div className="cursor-pointer">Download</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-medium">Passport Photo:</p>
                                    <p className="text-xs">Omolola passport.jpg</p>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
