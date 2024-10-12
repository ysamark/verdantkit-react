import { FaAngleDown } from "react-icons/fa6";

import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownFooter,
  DropDownHeader,
  DropDownProps,
} from "@components/DropDown";

export const DropDownElement = (props: DropDownProps) => {
  return (
    <div className="w-full h-screen flex justify-center items-start bg-purple-500 p-20">
      <DropDown {...props}>
        <DropDownButton className="flex flex-row gap-4 items-center px-4 py-3 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 active:scale-105 transition-transform shadow-xl text-zinc-50 box-border">
          <i>
            <FaAngleDown />
          </i>
          <span>Click to show dropdown</span>
        </DropDownButton>
        <DropDownContent className="w-[450px] border-2 border-zinc-300 dark:border-yellow-700 bg-zinc-50 shadow-xl dark:bg-zinc-800 p-2 rounded-md">
          <DropDownHeader className="w-full flex p-4 border-b border-zinc-700 border-solid">
            Header Here
          </DropDownHeader>
          <h1>Hey Man...</h1>
          <input className="dark:text-zinc-900" />
          <h1>Hey Man...</h1>
          <input className="dark:text-zinc-900" />
          <h1>Hey Man...</h1>
          <input className="dark:text-zinc-900" />
          <h1>Hey Man...</h1>
          <input className="dark:text-zinc-900" />
          <h1>Hey Man...</h1>
          <input className="dark:text-zinc-900" />
          <h1>Hey Man...</h1>
          <input className="dark:text-zinc-900" />
          <h1>Hey Man...</h1>
          <input className="dark:text-zinc-900" />
          <DropDownFooter>Footer Here</DropDownFooter>
        </DropDownContent>
      </DropDown>
    </div>
  );
};
