"use client";

import { useId, useState, type InputHTMLAttributes, type SelectHTMLAttributes } from "react";
import { CaretDown, Eye, EyeSlash } from "@phosphor-icons/react";
import { cn } from "@/shared/lib";

const controlBase =
  "h-11 w-full rounded-xl border bg-surface px-3.5 text-sm text-ink transition placeholder:text-muted/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

function controlClasses(invalid: boolean, className?: string) {
  return cn(
    controlBase,
    invalid
      ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500/25"
      : "border-line focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/25",
    className,
  );
}

type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  helper?: string;
  children: React.ReactNode;
};

/** Label + control + a single helper/error line wired for screen readers. */
function FieldShell({ id, label, required, error, helper, children }: FieldShellProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-ink text-sm font-medium">
        {label}
        {required && (
          <span className="text-red-600" aria-hidden>
            {" *"}
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      ) : helper ? (
        <p id={`${id}-help`} className="text-muted text-xs">
          {helper}
        </p>
      ) : null}
    </div>
  );
}

function describedBy(id: string, error?: string, helper?: string) {
  if (error) return `${id}-error`;
  if (helper) return `${id}-help`;
  return undefined;
}

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  label: string;
  error?: string;
  helper?: string;
};

export function TextField({ label, error, helper, required, className, ...props }: TextFieldProps) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} required={required} error={error} helper={helper}>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, helper)}
        className={controlClasses(!!error, className)}
        {...props}
      />
    </FieldShell>
  );
}

export function PasswordField({
  label,
  error,
  helper,
  required,
  className,
  ...props
}: TextFieldProps) {
  const id = useId();
  const [show, setShow] = useState(false);
  return (
    <FieldShell id={id} label={label} required={required} error={error} helper={helper}>
      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, helper)}
          className={controlClasses(!!error, cn("pr-11", className))}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Parolni yashirish" : "Parolni koʻrsatish"}
          aria-pressed={show}
          className="text-muted hover:text-ink focus-visible:ring-brand absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-xl transition focus-visible:ring-2 focus-visible:outline-none"
        >
          {show ? <EyeSlash className="size-5" /> : <Eye className="size-5" />}
        </button>
      </div>
    </FieldShell>
  );
}

type Option = { value: string; label: string };
type SelectFieldProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> & {
  label: string;
  error?: string;
  helper?: string;
  placeholder?: string;
  options: readonly Option[];
};

export function SelectField({
  label,
  error,
  helper,
  required,
  className,
  placeholder,
  options,
  value,
  ...props
}: SelectFieldProps) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} required={required} error={error} helper={helper}>
      <div className="relative">
        <select
          id={id}
          required={required}
          value={value}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, helper)}
          className={controlClasses(
            !!error,
            cn("cursor-pointer appearance-none pr-10", !value && "text-muted/80", className),
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-ink">
              {opt.label}
            </option>
          ))}
        </select>
        <CaretDown
          className="text-muted pointer-events-none absolute inset-y-0 right-3.5 my-auto size-4"
          aria-hidden
        />
      </div>
    </FieldShell>
  );
}
