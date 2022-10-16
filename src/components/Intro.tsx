import React from "react";
import Image from "next/image";
import profile from "@public/profile.png";
import Links from "./Links";
import { useThemeContext } from "@/context/ThemeProvider";

const Intro = () => {
  const { base, main } = useThemeContext();

  return (
    <section
      id="intro"
      className="flex w-full scroll-mt-28 flex-col items-center gap-6 md:flex-row-reverse md:justify-between"
    >
      <div className={`rounded-full border border-${main}-400 p-1 md:m-8`}>
        <div className="relative aspect-square h-32 md:h-48">
          <Image
            src={profile}
            alt="profile"
            layout="fill"
            className="rounded-full"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="text-4xl font-medium">Matias Ruiz</h1>
        <h3 className={`text-center text-lg text-${main}-300 md:text-left`}>
          Computer Engineering Student and
          <br /> Full Stack Developer
        </h3>
        <Links />

        <a
          href="/resume.pdf"
          download
          className={`py-2 px-4 bg-${main}-400 text-${base} rounded-md font-bold hover:bg-${main}-300`}
        >
          Get Resume
        </a>
      </div>
    </section>
  );
};

export default Intro;
