import { noEmpty } from "@verdantkit/utils";
import { FunctionComponent, PropsWithChildren } from "react";

type AsideSectionProps = {
  title?: string;
};

type AsideSectionComponent = FunctionComponent<
  PropsWithChildren & AsideSectionProps
>;

export const AsideSection: AsideSectionComponent = ({ children, title }) => {
  return (
    <div className="w-full flex flex-col h-auto pt-4 -mt-[3px]">
      {noEmpty(title) && (
        <div className="w-full h-auto px-3 pb-4">
          <h5 className="text-zinc-700 dark:text-zinc-400 dark:font-extrabold text-xl font-semibold uppercase">
            {title}
          </h5>
        </div>
      )}
      <div className="w-full flex flex-col">{children}</div>
    </div>
  );
};
