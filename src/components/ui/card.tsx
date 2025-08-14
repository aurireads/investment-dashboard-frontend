import * as React from "react";

export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="rounded-xl border border-gray-700 bg-white dark:bg-gray-800 shadow-sm" {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="p-4" {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className="text-lg font-semibold" {...props}>
      {children}
    </h3>
  );
}