import React from "react";

import { drillAdditionalPropsToFirstChild } from "~/utils";

type RichTextWrapperProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

type RichTextWrapperComponent = React.FunctionComponent<RichTextWrapperProps>;

type RichTextContentProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement>
>;

const RichTextContent = ({ children, ...props }: RichTextContentProps) => {
  const childElement = drillAdditionalPropsToFirstChild({
    children,
    props: {
      ...props,
    },
  });

  return childElement;
};

export const RichTextWrapper: RichTextWrapperComponent = ({
  className,
  children,
  ...props
}) => {
  const childElement = drillAdditionalPropsToFirstChild({
    children,
    props: {
      ...props,
      className,
    },
  });

  return (
    <RichTextContent className="w-full prose lg:prose-xl xl:prose-2xl dark:prose-invert max-w-full prose-p:m-0 prose-p:p-0 prose-headings:m-0 prose-primary [&>div]:min-h-[900px] [&>div]:w-full outline-none [&>div>div.tableWrapper>table_td]:border [&>div>div.tableWrapper>table_td]:border-solid [&>div>div.tableWrapper>table_td]:border-zinc-400 dark:[&>div>div.tableWrapper>table_td]:border-zinc-700 [&>div>div.tableWrapper>table_th]:border [&>div>div.tableWrapper>table_th]:border-solid [&>div>div.tableWrapper>table_th]:border-zinc-400 dark:[&>div>div.tableWrapper>table_th]:border-zinc-700 [&>div>div.tableWrapper>table]:rounded-md [&>div>div.tableWrapper>table]:shadow-sm [&>div>div.tableWrapper>table]:w-full [&>div>div.tableWrapper>table_th]:bg-zinc-100 dark:[&>div>div.tableWrapper>table_th]:bg-zinc-800 [&>div>div.tableWrapper>table_th]:p-3 [&>div>div.tableWrapper>table_td]:p-3 [&_*]:box-border [&_ul[data-type=taskList]_li]:flex [&_ul[data-type=taskList]_li]:flex-row [&_ul[data-type=taskList]_li]:gap-2 [&_ul[data-type=taskList]]:px-0">
      {childElement}
    </RichTextContent>
  );
};
