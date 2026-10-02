"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

export default function WireframeView() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // ⭐ Categories mapped from your real roles
  const categories = [
    {
      name: "UX/UI DESIGN",
      match: (p: any) => p.roles.includes("UX/UI Designer"),
    },
    {
      name: "GRAPHIC DESIGN",
      match: (p: any) => p.roles.includes("Graphic Designer"),
    },
    {
      name: "WEB/MOBILE DEVELOPMENT",
      match: (p: any) =>
        p.roles.includes("App Developer") || p.roles.includes("Web Designer"),
    },
  ].map((cat) => ({
    name: cat.name,
    projects: projects.filter(cat.match),
  }));

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold tracking-tight mb-2">
        Anne Beltran is an
      </h1>
      <h2 className="text-3xl font-bold mb-10">INTERDISCIPLINARY DESIGNER</h2>

      {/* Interactive Rows */}
      <div className="space-y-12">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCategory(cat.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Section Title */}
            <p className="text-xl font-semibold mb-3">{cat.name}</p>

            {/* Hover thumbnails */}
            {hoveredCategory === cat.name && (
              <div className="flex gap-4 flex-wrap mb-4 transition-all">
                {cat.projects.map((proj) => (
                  <Link
                    key={proj.id}
                    href={proj.link ?? "#"}
                    className="transition-transform hover:scale-125"
                  >
                    <div className="w-40 h-40 overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Divider */}
            <div className="border-b border-black"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
