import { FlatList, FlatListProps } from "@components/FlatList";

export const FlatListElement = (props: FlatListProps) => {
  const data = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    name: `User of number ${i}`,
    username: `user-of-number-${i}`,
  }));

  return (
    <FlatList
      {...props}
      data={data}
      title="Usuários"
      className="flex flex-col gap-3 w-full"
      renderItem={(itemData) => (
        <div className="w-full flex flex-row justify-between items-center gap-3 bg-zinc-200 rounded-md p-6 dark:bg-zinc-800">
          <h5 className="font-bold">{itemData.name}</h5>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {itemData.username}
          </span>
        </div>
      )}
    />
  );
};
