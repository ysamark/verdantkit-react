import { SelectList } from "@components/SelectList";
import { SelectListProps } from "@components/SelectList/types";

type Data = {
  id: number;
  name: string;
  username: string;
};

export const SelectListElement = (props: SelectListProps<Data>) => {
  const data = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    name: `User of number ${i}`,
    username: `user-of-number-${i}`,
  }));

  return (
    <SelectList
      {...props}
      data={data}
      onSelect={(s) => {
        console.log(">>> selected: ", s);
      }}
      map={(item) => ({
        data: item,
        id: item.id,
        title: item.name,
        subTitle: item.username,
      })}
    />
  );
};
