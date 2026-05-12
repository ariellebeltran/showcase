// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 dark:bg-white-900/80 backdrop-blur-md shadow-sm">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           href="https://ariellebeltran-projectshowcase.vercel.app/"
//           className="flex items-center gap-2"
//         >
//           <img
//             src="https://ariellebeltran.github.io/main/images/testlogo-thick.png"
//             alt="AB Logo"
//             width={32}
//             height={32}
//             className="rounded"
//           />
//         </Link>

//         {/* Hamburger Button */}
//         <button onClick={() => setOpen(!open)} className="md:hidden p-2">
//           <img
//             src="https://ariellebeltran.github.io/main/images/hamburg-icon.png"
//             alt="Menu"
//             className="w-8 h-8"
//           />
//         </button>

//         {/* Desktop Menu */}

//         <div className="hidden md:flex gap-8 text-lg text-black-600 dark:text-white-400">
//           <Link
//             href="https://ariellebeltran-projectshowcase.vercel.app/"
//             className="hover:text-gray-600"
//           >
//             Home
//           </Link>

//           <a
//             href="https://1drv.ms/w/c/F1EDBC7B01B473B9/IQAIizPQJVjeRaFb6cgjWzByARgvjU4cC3EY9v5YPSAzVWA?e=r8xdCk"
//             target="_blank"
//             className="hover:text-gray-600"
//           >
//             Resume
//           </a>

//           <button
//             onClick={() =>
//               navigator.clipboard.writeText("arielle-beltran@outlook.com")
//             }
//             className="hover:text-gray-600"
//           >
//             Contact
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="md:hidden bg-white dark:bg-white-900 shadow-inner px-6 py-4 flex flex-col gap-4 text-lg">
//           <Link href="/" onClick={() => setOpen(false)}>
//             Home
//           </Link>
//           <Link href="/about" onClick={() => setOpen(false)}>
//             About
//           </Link>
//           <Link href="/projects" onClick={() => setOpen(false)}>
//             Projects
//           </Link>
//           <a
//             href="https://1drv.ms/w/c/F1EDBC7B01B473B9/IQAIizPQJVjeRaFb6cgjWzByARgvjU4cC3EY9v5YPSAzVWA?e=r8xdCk"
//             target="_blank"
//           >
//             Resume
//           </a>
//           <button
//             onClick={() =>
//               navigator.clipboard.writeText("arielle-beltran@outlook.com")
//             }
//           >
//             Contact
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://ariellebeltran.github.io/main/images/testlogo-thick.png"
            alt="AB Logo"
            width={32}
            height={32}
            className="rounded"
          />
        </Link>

        {/* ⭐ Hamburger Icon (always visible) */}
        <button onClick={() => setOpen(!open)} className="p-2">
          <span className="block w-8 h-8 text-black text-2xl leading-none">☰</span>
        </button>

        {/* ⭐ Floating Dropdown Menu (like your old site) */}
        {open && (
          <div className="absolute right-4 top-16 bg-white shadow-lg rounded-md min-w-[160px] py-2 z-50 border border-gray-200">
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <a
              href="https://1drv.ms/w/c/F1EDBC7B01B473B9/IQAIizPQJVjeRaFb6cgjWzByARgvjU4cC3EY9v5YPSAzVWA?e=r8xdCk"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText("arielle-beltran@outlook.com");
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
