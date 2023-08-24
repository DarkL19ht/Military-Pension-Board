import { FaLaptop } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-3 bg-[#eff0f6] px-[25px] pb-5 pt-[25px]">
            <div className="flex items-center justify-between">
                <h1>Hello, Olayinka 👋</h1>
                <Button title="Add Pensioners" variant="default" size="sm" />
            </div>
            <div>
                <div className="grid grid-cols-4 gap-3 ">
                    <div className="flex gap-2 rounded-emd bg-card p-4">
                        <FaLaptop size={25} className="text-red-400" />
                        <div className="flex flex-col gap-y-2">
                            <h4>Completed Verification</h4>
                            <h1 className="text-2xl font-bold">967</h1>
                        </div>
                    </div>
                    <div className="flex gap-2 bg-card p-4">
                        <div className="mt-1">
                            <FaLaptop size={25} />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h4>Completed Verification</h4>
                            <h1 className="text-2xl font-bold">967</h1>
                        </div>
                    </div>
                    <div className="flex gap-2 bg-card p-4">
                        <div className="mt-1">
                            <FaLaptop size={25} />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h4>Completed Verification</h4>
                            <h1 className="text-2xl font-bold">967</h1>
                        </div>
                    </div>
                    <div className="flex gap-2 bg-card p-4">
                        <div className="mt-1">
                            <FaLaptop size={25} />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h4>Completed Verification</h4>
                            <h1 className="text-2xl font-bold">967</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
}
