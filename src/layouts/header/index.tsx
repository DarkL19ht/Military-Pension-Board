import { FiSearch, FiBell } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import profileImage from "@/assets/ib.png";

function Header() {
    return (
        <div className="flex h-[70px] min-w-max items-center justify-between bg-green-100/75 px-[25px] shadow-lg">
            <div className="max-w-xs pl-3">
                <div>
                    <div className="group relative">
                        <input
                            type="text"
                            id="example9"
                            className="focus:border-primary-400 focus:ring-primary-200 block w-full rounded-md
                             border-gray-300 px-10 py-1 shadow-sm outline-none transition-all
                             hover:bg-gray-50"
                            placeholder="Quick search..."
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
                            <FiSearch size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relativ flex items-center gap-[15px]">
                <div className="flex items-center gap-[25px] border-r pr-[25px]">
                    <FiBell />
                    <FaEnvelope />
                </div>
                <div className="relative flex items-center gap-[15px] ">
                    <div className="relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-green-700">
                        <img
                            src={profileImage}
                            className="h-12 w-12 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-gray-600">Olayinka IB</p>
                        <p className="text-gray-400">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
