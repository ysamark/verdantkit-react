"use client";

import { noEmpty } from "@verdantkit/utils";

import { EmptyListFallback } from "./components/EmptyListFallback";
import { ListBody } from "./components/ListBody";
import { LoadingListFallback } from "./components/LoadingListFallback";
import { Pagination } from "./components/Pagination";
import { SearchBox } from "./components/SearchBox";
import { FlatListContextProvider } from "./context";
import { FlatListProps } from "./types";

export * from "./types";

export function FlatList<Data = any>(
  props: FlatListProps<Data>
): React.ReactNode {
  return (
    <FlatListContextProvider {...props}>
      <div className="w-full h-auto flex flex-col py-5">
        <div className="w-full h-auto flex flex-row items-center justify-end">
          {noEmpty(props.title) && (
            <div className="w-full flex flex-row justify-start items-center flex-grow mb-7">
              <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-wrap break-words whitespace-break-spaces dark:text-zinc-300">
                {props.title}
              </h3>
            </div>
          )}
          <SearchBox />
        </div>
        <div className="w-full h-auto block">
          <div className="w-full h-auto flex flex-row flex-wrap">
            <ListBody />
            <EmptyListFallback />
            <LoadingListFallback />
          </div>
        </div>
        <div className="w-full block">
          <Pagination />
        </div>
      </div>
    </FlatListContextProvider>
  );
}
