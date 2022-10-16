import { useThemeContext } from "@/context/ThemeProvider";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { base, main, setScheme } = useThemeContext();

  return (
    <nav
      className={`sticky top-0 z-10 flex items-center justify-between bg-${base} p-2`}
    >
      <div className="flex gap-4">
        <Link href="#intro">
          <span className={`hover:text-${main}-300 cursor-pointer text-sm`}>
            ~
          </span>
        </Link>
        <Link href="#skills">
          <span className={`hover:text-${main}-300 cursor-pointer text-sm`}>
            Skills
          </span>
        </Link>
        <Link href="#projects">
          <span className={`hover:text-${main}-300 cursor-pointer text-sm`}>
            Projects
          </span>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="relative aspect-square h-5 rounded-full border-2 border-orange-400"
          onClick={() => setScheme("gruv", "orange")}
        >
          <span className="absolute inset-0 rounded-full bg-base-gruv" />
        </button>
        <button
          className="relative aspect-square h-5 rounded-full border-2 border-red-400"
          onClick={() => setScheme("argo", "red")}
        >
          <span className="absolute inset-0 rounded-full bg-base-argo" />
        </button>
        <button
          className="relative aspect-square h-5 rounded-full border-2 border-emerald-400"
          onClick={() => setScheme("hypr", "emerald")}
        >
          <span className="bg-base-400 absolute inset-0 rounded-full" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
