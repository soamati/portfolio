import React from "react";
import Image from "next/image";
import { IProject } from "./data";
import { useThemeContext } from "@/context/ThemeProvider";

type Props = IProject;

const Project = (props: Props) => {
  const { title, description, stack, features, image, links } = props;
  const { base, main } = useThemeContext();

  return (
    <div className=" rounded-sm border-2 border-dashed border-gray-500">
      <div className="flex gap-4 p-4">
        <div className="relative hidden flex-1 overflow-hidden rounded-sm md:block">
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <h4 className="text-lg">{title}</h4>
            <p className="text-gray-400">{description}</p>
          </div>

          <ul className="text-sm">
            {features.map((feature, index) => (
              <li key={index}>
                <div className="flex items-center gap-1">
                  <div
                    className={`h-2 w-2 animate-pulse rounded-full bg-${main}-300`}
                  />
                  <span>{feature}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-2 text-xs text-${main}-300`}>
            {stack.map((name, index) => (
              <span
                key={index}
                className={`rounded-full border border-${main}-300 py-1 px-2`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex bg-gray-500">
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 cursor-pointer text-center text-black hover:bg-${main}-300`}
        >
          Live demo
        </a>
        <a
          href={links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 cursor-pointer text-center text-${base} hover:bg-${main}-300`}
        >
          GitHub repo
        </a>
      </div>
    </div>
  );
};

export default Project;
