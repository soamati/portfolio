import React from "react";
import type { NextPage } from "next";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useThemeContext } from "@/context/ThemeProvider";

const Home: NextPage = () => {
  const { base } = useThemeContext();

  return (
    <div className={`min-w-screen bg-${base}`}>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-16 px-2 pb-6 font-roboto text-gray-50">
        <Nav />

        <Intro />
        <Skills />
        <Projects />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
