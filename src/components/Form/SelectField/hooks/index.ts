import { useContext, useEffect, useRef, useState } from "react";

import { SelectFieldContext } from "@components/Form/SelectField/context";
import {
  ListDataStack,
  OptionProps,
  SelectFieldContextDataObject,
  SelectFieldData,
} from "@components/Form/SelectField/types";
import { Nullish } from "@verdantkit/utils";

export const useSelectField = () => useContext(SelectFieldContext);

export const useSelectFieldDataObject = (
  data: SelectFieldData
): SelectFieldContextDataObject => {
  const [query, setQuery] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Nullish<OptionProps>>();
  const [listDataStack, setListDataStack] = useState<ListDataStack>([
    data ?? [],
  ]);

  const closeOnSelectFieldContainerBlurState = useRef<boolean>(true);

  useEffect(() => {
    setListDataStack([data]);
  }, [data]);

  return {
    query,
    setQuery,
    typing,
    setTyping,
    opened,
    setOpened,
    selectedOption,
    setSelectedOption,
    listDataStack,
    setListDataStack,
    closeOnSelectFieldContainerBlurState,

    resetState: () => {
      setOpened(false);
      setQuery("");
      setTyping(false);
    },
  };
};
