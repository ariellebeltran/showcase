"use client";

import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface CarouselViewProps {
  projects: Project[];
}

export default function CarouselView({ projects }: CarouselViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const doubled = useMemo(() => [...projects, ...projects], [projects]);

  const normalizeScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const halfWidth = container.scrollWidth / 2;

    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
    }
  };

  // ⭐ Start in the middle for perfect infinite loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const halfWidth = container.scrollWidth / 2;
    container.scrollLeft = halfWidth / 2;
  }, []);

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frame: number;

    const animate = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += 1;
        normalizeScroll();
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused, isDragging]);

  // Dragging
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = scrollRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const scrollByAmount = (amount: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollLeft += amount;
  };

  return (
    <div className="relative w-full">
      {/* Arrows */}
      <button
        onClick={() => scrollByAmount(-300)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-100/70 backdrop-blur-md p-3 rounded-full shadow hover:scale-110 transition"
      >
        ‹
      </button>

      <button
        onClick={() => scrollByAmount(300)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-100/70 backdrop-blur-md p-3 rounded-full shadow hover:scale-110 transition"
      >
        ›
      </button>

      {/* ⭐ Scrollbar hidden + infinite loop working */}
      <div
        ref={scrollRef}
        className="scrollbar-hide overflow-x-scroll whitespace-nowrap cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          stopDragging();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onScroll={normalizeScroll}
        style={{ scrollBehavior: "auto" }}
      >
        <div className="flex gap-6 py-4 px-2">
          {doubled.map((p, index) => (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                key={index}
                className="min-w-[380px] bg-white rounded-lg shadow p-4 hover:scale-[1.02] transition-transform text-center"
              >
                <img src={p.image} className="rounded mb-3" />
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="opacity-70">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
