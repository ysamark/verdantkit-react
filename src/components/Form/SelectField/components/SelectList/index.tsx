import { noEmpty, strMatches } from "@verdantkit/utils";
import { useEffect, useRef } from "react";

import { Option } from "@components/Form/SelectField/Option";
import { useSelectField } from "@components/Form/SelectField/hooks";
import {
  OptionProps,
  SelectEventHandler,
} from "@components/Form/SelectField/types";
import { ScrollArea } from "ui@components/scroll-area";

import { BackButton } from "./BackButton";
import { EmptyListFallback } from "./EmptyListFallback";
import { updateSelectListHeight } from "./utils";

export const SelectList = () => {
  const context = useSelectField();

  const selectListElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateSelectListHeight(selectListElementRef);
  }, [context.opened, context.listDataStack]);

  const optionSelectHandler: SelectEventHandler = (option) => {
    context.setSelectedOption(option);

    context.resetState();
  };

  const listWrapperMouseEnterHandler = () => {
    context.closeOnSelectFieldContainerBlurState.current = false;
  };

  const listWrapperMouseLeaveHandler = () => {
    context.closeOnSelectFieldContainerBlurState.current = true;
  };

  const optionOpenHandler: SelectEventHandler = ({ options }) => {
    if (!(options instanceof Array && options.length >= 1)) {
      return;
    }

    context.setListDataStack([...context.listDataStack, options]);
  };

  const listDataFilter = (listData: OptionProps): boolean => {
    if (!noEmpty(context.query)) {
      return true;
    }

    return strMatches(listData.label, context.query);
  };

  const listData = context.listDataStack[-1 + context.listDataStack.length];

  const filteredListData = listData.filter(listDataFilter);

  return (
    <div
      ref={selectListElementRef}
      onMouseEnter={listWrapperMouseEnterHandler}
      onMouseLeave={listWrapperMouseLeaveHandler}
      className="w-full h-max block absolute top-[calc(100%-4px)] left-0 right-0 border-x border-b border-solid rounded-es-md rounded-ee-md z-10 shadow-lg bg-zinc-50 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600"
    >
      <ScrollArea type="hover" className="w-full pb-4">
        <BackButton />

        {filteredListData.map((option, optionIndex) => (
          <Option
            {...option}
            key={optionIndex}
            selected={context.selectedOption?.value === option.value}
            onSelect={optionSelectHandler}
            onOpen={optionOpenHandler}
          />
        ))}

        {filteredListData.length < 1 && <EmptyListFallback />}
      </ScrollArea>
    </div>
  );
};
