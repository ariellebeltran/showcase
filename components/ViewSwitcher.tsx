"use client";

import type { Dispatch, SetStateAction } from "react";

interface ViewSwitcherProps {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

export default function ViewSwitcher({ mode, setMode }: ViewSwitcherProps) {
  const modes = ["carousel", "grid"];

  return (
    <div className="flex gap-4 justify-center my-6">
      {modes.map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`px-4 py-2 rounded-md capitalize ${
            mode === m
              ? "bg-gray-600 text-white"
              : "bg-gray-200 dark:bg-gray-100"
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
