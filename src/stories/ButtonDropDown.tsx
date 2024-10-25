import {
  ButtonDropDown,
  ButtonDropDownProps,
} from "@components/ButtonDropDown";

function DropDownButtonContent() {
  return (
    <div className="w-80 bg-white p-4 rounded-md flex flex-col gap-3 justify-center">
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
      <button className="w-full rounded-md px-4 py-2 hover:bg-zinc-100 active:bg-zinc-300 font-bold text-zinc-800">
        Click to hear me
      </button>
    </div>
  );
}

export const ButtonDropDownElement: React.FunctionComponent<
  ButtonDropDownProps
> = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-purple-400">
      <ButtonDropDown
        {...props}
        content={DropDownButtonContent}
        className="bg-emerald-700 text-zinc-50 rounded-md px-5 py-3 shadow-xl"
      >
        Click to see dropdown
      </ButtonDropDown>
    </div>
  );
};
