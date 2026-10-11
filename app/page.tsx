"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import ViewSwitcher from "@/components/ViewSwitcher";
import CarouselView from "@/components/CarouselView";
import GridView from "@/components/GridView";
import FreeformView from "@/components/FreeformView";
import WireframeView from "@/components/WireframeView";
import LatestUpdateCard from "@/components/LatestUpdateCard";

// type BlogPost = {
//   title: string;
//   slug: string;
//   excerpt?: string;
//   content?: string;
// };

export default function Home() {
  const [mode, setMode] = useState("carousel");
  const [showSwitcher, setShowSwitcher] = useState(false);

  const projectsWithLinks = projects.map((project) => ({
    ...project,
    link: project.link ?? "",
  }));

  // const [posts, setPosts] = useState<BlogPost[]>([]);
  // const latestPost = posts[0];

  // useEffect(() => {
  //   async function loadPosts() {
  //     try {
  //       const res = await fetch(
  //         "https://project-blog-bay.vercel.app/content.json",
  //         { cache: "no-store" },
  //       );

  //       const data = await res.json();
  //       setPosts(data);
  //     } catch (err) {
  //       console.error("Failed to load blog posts:", err);
  //     }
  //   }

  //   loadPosts();
  // }, []);

  return (
    <main className="px-6 py-10">
      {/* Header + subheader */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-2">ANNE BELTRAN</h1>
        <h2 className="text-3xl font-semibold mb-6">
          Interdisciplinary Designer
        </h2>
      </div>

      {/* change view button, right side, above switches / first section */}
      {/* <div className="flex justify-end mb-4"> */}
      <div className="max-w-4xl mx-auto mt-12 px-6 text-center">
        <button
          onClick={() => setShowSwitcher((prev) => !prev)}
          className="text-black font-medium hover:text-gray-700"
        >
          Change View Mode
        </button>
      </div>

      {/* switches, initially hidden */}
      {showSwitcher && <ViewSwitcher mode={mode} setMode={setMode} />}

      {mode === "carousel" && <CarouselView projects={projectsWithLinks} />}
      {mode === "grid" && <GridView projects={projectsWithLinks} />}
      {mode === "wireframe" && <WireframeView />}
      {/* {mode === "freeform" && <FreeformView projects={projectsWithLinks} />} */}

      {/* ⭐ Blog Section */}
      {/* <section className="mt-20">
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
      </section> */}

      <section className="mt-20 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">PROJECT UPDATES</h2>

          <a
            href="/updates"
            className="text-black-500 hover:text-gray-700 font-medium"
          >
            View All →
          </a>
        </div>

        <div className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <LatestUpdateCard />
        </div>
      </section>
    </main>
  );
}
