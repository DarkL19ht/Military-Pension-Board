
import Stats from "./components/Stats.tsx";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-7xl w-4/6 mx-auto space-y-7">
        <h1 className="text-green-500 font-medium mb-5">
          The last 5 Pensioners
        </h1>
        <Stats />
        <div className="p-5 bg-neutral-50 text-gray-400 grid grid-cols-3 lg:grid-cols-4 gap-8 rounded text-sm space-y-1 border-s-8 border-amber-400 px-4">
          <div className="space-y-1 px-5">
            <div className="text-lg font-medium text-slate-700">Name</div>
            <div>Joseph Aminu</div>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">
              Verification status
            </div>
            <button className="rounded-lg text-amber-400 bg-amber-100 font-medium text-center py-1 px-5 ml-2">
              Pending
            </button>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">Service ID</div>
            <div>20NA/62/2913</div>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">Rank</div>
            <div>Staff sergent</div>
          </div>
        </div>

        <div className="p-5 bg-neutral-50 text-gray-400 grid grid-cols-3 lg:grid-cols-4 gap-8 rounded text-sm space-y-1 border-s-8 border-red-600 px-4">
          <div className="space-y-1 px-5">
            <div className="text-lg font-medium text-slate-700">Name</div>
            <div>Joseph Aminu</div>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">
              Verification status
            </div>
            <button className="rounded-lg text-red-400 bg-red-100 font-medium text-center py-1 px-5 ml-2">
              Pending
            </button>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">Service ID</div>
            <div>20NA/62/2913</div>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">Rank</div>
            <div>Staff sergent</div>
          </div>
        </div>

        <div className="p-5 bg-neutral-50 text-gray-400 grid grid-cols-3 lg:grid-cols-4 gap-8 rounded text-sm space-y-1 border-s-8 border-amber-400 px-4">
          <div className="space-y-1 px-5">
            <div className="text-lg font-medium text-slate-700">Name</div>
            <div>Joseph Aminu</div>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">
              Verification status
            </div>
            <button className="rounded-lg text-amber-400 bg-amber-100 font-medium text-center py-1 px-5 ml-2">
              Pending
            </button>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">Service ID</div>
            <div>20NA/62/2913</div>
          </div>
          <div className="space-y-1 border-s-2 px-5">
            <div className="text-lg font-medium text-slate-700">Rank</div>
            <div>Staff sergent</div>
          </div>
        </div>

        <Stats />
      </div>
    </div>
  );
}

export default App;
