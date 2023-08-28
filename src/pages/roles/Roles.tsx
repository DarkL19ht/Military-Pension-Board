import Rolebar from "./Rolebar";

function Roles() {
    return (
        <div className="mt-10 flex items-center justify-center">
            <div className="mx-auto w-5/6 max-w-7xl space-y-3 rounded-xl border border-gray-500 px-14 py-20">
                <h1 className="mb-5 font-medium text-green-500">Roles and Permission</h1>
                <Rolebar />
            </div>
        </div>
    );
}

export default Roles;
