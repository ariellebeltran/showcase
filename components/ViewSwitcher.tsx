"use client";

import type { Dispatch, SetStateAction } from "react";

interface ViewSwitcherProps {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

export default function ViewSwitcher({ mode, setMode }: ViewSwitcherProps) {
  const modes = [
    {
      id: "carousel",
      icon: "https://ariellebeltran.github.io/main/images/carousel_iconv2.png",
    },
    {
      id: "grid",
      icon: "https://ariellebeltran.github.io/main/images/grid_iconv2.png",
    },
    {
      id: "wireframe",
      icon: "https://ariellebeltran.github.io/main/images/slots_iconv2.png",
    },
  ];

  return (
    <div className="flex gap-3 justify-center my-3">
      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => setMode(m.id)}
          className={`p-2 rounded-md border transition ${
            mode === m.id ? " border-gray-400" : "border-gray-100"
            // ? "bg-gray-600 border-gray-600"
            // : "bg-gray-200 dark:bg-gray-100 border-gray-300"
          }`}
        >
          <img
            src={m.icon}
            alt={m.id}
            // className={`w-8 h-8 ${mode === m.id ? "invert brightness-0" : ""}`}
            className={`w-14 h-14 ${mode === m.id ? " " : ""}`}
          />
        </button>
      ))}
    </div>
  );
}
