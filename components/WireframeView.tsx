"use client";

import Link from "next/link";
import { useState } from "react";

interface Project {
  title: string;
  thumbnail: string;
  link: string;
}

interface Category {
  name: string;
  projects: Project[];
}

const categories: Category[] = [
  {
    name: "UX/UI DESIGN",
    projects: [
      {
        title: "Project 1",
        thumbnail: "/thumbnails/ui1.jpg",
        link: "/projects/ui1",
      },
      {
        title: "Project 2",
        thumbnail: "/thumbnails/ui2.jpg",
        link: "/projects/ui2",
      },
      {
        title: "Project 3",
        thumbnail: "/thumbnails/ui3.jpg",
        link: "/projects/ui3",
      },
      {
        title: "Project 4",
        thumbnail: "/thumbnails/ui4.jpg",
        link: "/projects/ui4",
      },
      {
        title: "Project 5",
        thumbnail: "/thumbnails/ui5.jpg",
        link: "/projects/ui5",
      },
    ],
  },
  {
    name: "GRAPHIC DESIGN",
    projects: [
      {
        title: "Poster Design",
        thumbnail: "/thumbnails/gd1.jpg",
        link: "/projects/gd1",
      },
      {
        title: "Branding",
        thumbnail: "/thumbnails/gd2.jpg",
        link: "/projects/gd2",
      },
      {
        title: "Illustration",
        thumbnail: "/thumbnails/gd3.jpg",
        link: "/projects/gd3",
      },
    ],
  },
  {
    name: "WEB/MOBILE DEVELOPMENT",
    projects: [
      {
        title: "App 1",
        thumbnail: "/thumbnails/dev1.jpg",
        link: "/projects/dev1",
      },
      {
        title: "App 2",
        thumbnail: "/thumbnails/dev2.jpg",
        link: "/projects/dev2",
      },
    ],
  },
];

export default function WireframeView() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6">
      {/* Header + Subheader */}
      <h1 className="text-4xl font-bold tracking-tight mb-2">
        Anne Beltran is an
      </h1>
      <h2 className="text-3xl font-bold mb-10">INTERDISCIPLINARY DESIGNER</h2>

      {/* Interactive Rows */}
      <div className="space-y-10">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="border-t pt-6 pb-4 cursor-pointer"
            onMouseEnter={() => setHoveredCategory(cat.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <p className="text-xl font-semibold mb-4">{cat.name}</p>

            {/* Hover thumbnails */}
            {hoveredCategory === cat.name && (
              <div className="flex gap-4 flex-wrap transition-all">
                {cat.projects.map((proj) => (
                  <Link
                    key={proj.title}
                    href={proj.link}
                    className="block transition-transform hover:scale-110"
                  >
                    <div className="w-20 h-20 bg-gray-200 border border-black overflow-hidden">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
