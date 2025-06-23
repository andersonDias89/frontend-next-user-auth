// components/ui/ButtonPrimary.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  variant?: ButtonVariant;
}

export const ButtonPrimary = ({
  children,
  icon,
  loading = false,
  disabled,
  variant = "primary",
  className,
  ...props
}: ButtonPrimaryProps) => {
  const baseClasses =
    "flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium transition-all focus:outline-none";

  const variantClasses = {
    primary: "bg-[#238cff] hover:bg-[#1a6edb] focus:ring-2 focus:ring-blue-400",
    secondary:
      "bg-[#4a4a68] hover:bg-[#5b5b7a] focus:ring-2 focus:ring-gray-400",
  };

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="animate-spin w-4 h-4" />
      ) : (
        icon && <span className="text-white">{icon}</span>
      )}
      {children}
    </button>
  );
};
