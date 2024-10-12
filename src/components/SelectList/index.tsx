import { SearchInput } from "./components/SearchInput";
import { SelectListBody } from "./SelectListBody";
import { SelectListContainer } from "./SelectListContainer";
import { SelectListProps } from "./types";

export function SelectList<ListDataType = any>(
  props: SelectListProps<ListDataType>
) {
  return (
    <SelectListContainer {...props}>
      <div className="w-full h-auto block">
        <div className="w-full flex flex-row items-center">
          <SearchInput />
        </div>
        <div className="w-full h-auto block">
          <div className="w-full flex flex-col items-center">
            <SelectListBody />
          </div>
        </div>
      </div>
    </SelectListContainer>
  );
}
