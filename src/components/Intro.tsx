import React from "react";
import Image from "next/image";
import profilePic from "../../public/profile.png";
import Links from "./Links";
import { useThemeContext } from "@/context/ThemeProvider";

const Intro = () => {
  const { main } = useThemeContext();

  return (
    <section
      id="intro"
      className="flex w-full scroll-mt-28 flex-col items-center gap-6 md:flex-row-reverse md:justify-between"
    >
      <div className={`rounded-full border border-${main}-400 p-1 md:m-8`}>
        <div className="relative aspect-square h-32 md:h-48">
          <Image
            src={profilePic}
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
      </div>
    </section>
  );
};

export default Intro;
