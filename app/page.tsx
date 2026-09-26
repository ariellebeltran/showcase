"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import ViewSwitcher from "@/components/ViewSwitcher";
import CarouselView from "@/components/CarouselView";
import GridView from "@/components/GridView";
import FreeformView from "@/components/FreeformView";
import WireframeView from "@/components/WireframeView";

type BlogPost = {
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
};

export default function Home() {
  const [mode, setMode] = useState("carousel");
  const [showSwitcher, setShowSwitcher] = useState(false);

  const projectsWithLinks = projects.map((project) => ({
    ...project,
    link: project.link ?? "",
  }));

  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch(
          "https://project-blog-bay.vercel.app/content.json",
          { cache: "no-store" },
        );

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      }
    }

    loadPosts();
  }, []);

  return (
    <main className="px-6 py-10">
      {/* Header + subheader */}
      {/* <h1 className="text-4xl font-bold mb-2">Anne Beltran is an</h1>
      <h2 className="text-3xl font-bold mb-6">INTERDISCIPLINARY DESIGNER</h2> */}
      {/* change view button, right side, above switches / first section */}
      {/* <div className="flex justify-end mb-4"> */}
      <div className="max-w-4xl mx-auto mt-12 px-6 text-right">
        <button
          onClick={() => setShowSwitcher((prev) => !prev)}
          className="text-black font-medium"
        >
          view
        </button>
      </div>

      {/* switches, initially hidden */}
      {showSwitcher && <ViewSwitcher mode={mode} setMode={setMode} />}

      {mode === "carousel" && <CarouselView projects={projectsWithLinks} />}
      {mode === "grid" && <GridView projects={projectsWithLinks} />}
      {mode === "wireframe" && <WireframeView />}
      {/* {mode === "freeform" && <FreeformView projects={projectsWithLinks} />} */}

      {/* ⭐ Blog Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">BLOG UPDATES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {posts.length === 0 && (
            <p className="text-center opacity-70">Loading blog posts...</p>
          )}

          {posts.map((post) => (
            <a
              key={post.slug}
              href={`https://project-blog-bay.vercel.app/${post.slug}`}
              className="block p-4 rounded-lg shadow bg-white hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="opacity-70">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
