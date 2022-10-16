import { useThemeContext } from "@/context/ThemeProvider";
import React from "react";
import { projects } from "./data";
import Project from "./Project";

const Projects = () => {
  const { main } = useThemeContext();

  return (
    <section id="projects" className="flex scroll-mt-20 flex-col gap-8">
      <div className="flex gap-2">
        <h2 className="text-xl font-semibold">
          <span className={`mr-1 text-${main}-300`}>~/</span>Projects
        </h2>
        <div className={`w-3 animate-blink bg-${main}-300`} />
      </div>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;
