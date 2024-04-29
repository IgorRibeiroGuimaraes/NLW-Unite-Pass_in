import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"tr"> {}

export function TableHeader(props: TableHeaderProps) {
  return (
    <tr className="py-3 px-4 text-sm font-semibold text-left" {...props} />
  );
}
