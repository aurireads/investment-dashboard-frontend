import * as React from "react";

export function Table({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <table className="w-full border-collapse text-sm" {...props}>
      {children}
    </table>
  );
}

export function TableHeader({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className="bg-gray-100 dark:bg-gray-800" {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900" {...props}>
      {children}
    </tr>
  );
}

export function TableHead({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-300" {...props}>
      {children}
    </th>
  );
}

export function TableCell({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className="px-4 py-2 text-gray-800 dark:text-gray-200" {...props}>
      {children}
    </td>
  );
}
