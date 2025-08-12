import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "danger" | "warning";
}

const variantClasses: Record<string, string> = {
  default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  warning: "bg-yellow-400 text-gray-900",
};

export function Badge({ children, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </span>
  );
}
