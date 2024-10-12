export const EmptyListFallback = () => {
  return (
    <li className="w-full flex flex-row justify-center py-5 px-8 text-center">
      <p className="text-lg font-light text-zinc-600 dark:text-zinc-300 inline-flex">
        Sem registros a apresentar
      </p>
    </li>
  );
};
