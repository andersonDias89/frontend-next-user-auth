import clsx from "clsx";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function Button({ children, onclick, disabled }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full",
        "border",
        "border-solid",
        "border-transparent",
        "transition-colors",
        "flex",
        "items-center",
        "justify-center",
        "bg-foreground",
        "text-background",
        "gap-2",
        "hover:bg-[#383838]",
        "dark:hover:bg-[#ccc]",
        "font-medium",
        "text-sm",
        "sm:text-base",
        "h-10",
        "sm:h-12",
        "px-4",
        "sm:px-5",
        "sm:w-auto"
      )}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
