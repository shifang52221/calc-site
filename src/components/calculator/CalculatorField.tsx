import type { ReactNode } from "react";

export function CalculatorField({
  label,
  value,
  onChange,
  inputMode = "decimal",
  placeholder,
}: {
  label: ReactNode;
  value: string;
  onChange: (value: string) => void;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-zinc-700 dark:text-zinc-300">{label}</span>
      <input
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
      />
    </label>
  );
}

