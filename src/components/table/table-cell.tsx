import { ComponentProps } from "react";

import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps <'td'> {}

export function TableCell (props:TableCellProps) {
  return (
    <td className={twMerge('text-zinc-300 py-3 px-4 text-sm', props.className)} {...props}/>
  )
} 