import Rolebar from "./Rolebar";
import addicon from "@/assets/icons/coolicon.svg";

function Roles() {
    return (
        <div className="mt-5 flex items-center justify-center">
            <div className="mx-auto w-5/6 max-w-7xl space-y-4 rounded-xl border border-gray-500 px-14 py-5 ">
                <div className="mb-5 flex justify-between text-2xl">
                    <h1 className="mb-3 text-2xl text-black">Roles and Permission</h1>
                    <button className="flex h-6 justify-between rounded bg-emerald-500 px-2 py-1 text-xs text-white">
                        <p className="mr-2 ">Add New Role</p>
                        <img src={addicon} alt="AddIcon" className=" h-3 w-3" />
                    </button>
                </div>
                <Rolebar
                    color="border-emerald-500"
                    label="Admin 1"
                    headerColor="text-emerald-500"
                    checkboxColor="bg-emerald-500"
                />
                <Rolebar
                    color="border-black"
                    label="Admin 2"
                    headerColor="text-black"
                    checkboxColor="bg-black"
                />
            </div>
        </div>
    );
}

export default Roles;
