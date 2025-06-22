import clsx from "clsx";

type ButtonDarkProps = {
  children: React.ReactNode;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export default function ButtonDark({
  children,
  onclick,
  disabled,
}: ButtonDarkProps) {
  return (
    <button
      className={clsx(
        "rounded-full",
        "border",
        "border-solid",
        "border-black/[.08]",
        "dark:border-white/[.145]",
        "transition-colors",
        "flex",
        "items-center",
        "justify-center",
        "hover:bg-[#f2f2f2]",
        "dark:hover:bg-[#1a1a1a]",
        "hover:border-transparent",
        "font-medium",
        "text-sm",
        "sm:text-base",
        "h-10",
        "sm:h-12",
        "px-4",
        "sm:px-5",
        "w-full",
        "sm:w-auto",
        "md:w-[158px]"
      )}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
