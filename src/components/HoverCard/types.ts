export type HoverCardProps = React.PropsWithChildren<
  Omit<React.HTMLAttributes<HTMLElement>, "content"> & {
    content: React.ElementType;
  }
>;
