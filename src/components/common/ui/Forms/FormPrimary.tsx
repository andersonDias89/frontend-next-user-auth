// components/ui/FormPrimary.tsx
import { ReactNode, FormHTMLAttributes } from "react";
import clsx from "clsx";

interface FormPrimaryProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  layout?: "column" | "row";
  title?: string;
  description?: string;
  errorMessage?: string;
}

export const FormPrimary = ({
  children,
  layout = "column",
  title,
  description,
  errorMessage,
  className,
  ...props
}: FormPrimaryProps) => {
  return (
    <form
      className={clsx(
        "rounded-2xl p-6 shadow-xl border border-[#2a2a40] bg-[#1c1c2b]/80 backdrop-blur-md",
        "text-white w-full max-w-2xl",
        className
      )}
      {...props}
    >
      {title && (
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-gray-400 mb-4">{description}</p>
      )}

      {errorMessage && (
        <p className="text-sm text-red-400 mb-4 bg-red-900/30 rounded px-4 py-2 border border-red-600/50">
          {errorMessage}
        </p>
      )}

      <div
        className={clsx(
          "gap-4",
          layout === "row" ? "grid grid-cols-2" : "flex flex-col"
        )}
      >
        {children}
      </div>
    </form>
  );
};
