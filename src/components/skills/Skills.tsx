import React from "react";
import Image from "next/image";
import SkillTitle from "./SkillTitle";
import apollo from "@public/apollo.svg";
import typegraphql from "@public/typegraphql.svg";
import typeorm from "@public/typeorm.svg";
import prisma from "@public/prisma.svg";
import python from "@public/python.svg";
import { useThemeContext } from "@/context/ThemeProvider";

const Skills = () => {
  const { main } = useThemeContext();

  return (
    <section id="skills" className="flex scroll-mt-20 flex-col gap-8">
      <div className="flex gap-2">
        <h2 className="text-xl font-semibold">
          <span className={`mr-1 text-${main}-300`}>~/</span>Skills
        </h2>
        <div className={`bg-${main}-300 w-3 animate-blink`} />
      </div>

      <div className="flex flex-col gap-4">
        <SkillTitle name="Languages" />
        <div className="grid grid-cols-3 gap-6 md:grid-cols-4">
          <div className="skill-container">
            <i className="devicon-javascript-plain colored text-3xl"></i>
            <p className="text-xs">JavaScript</p>
          </div>
          <div className="skill-container">
            <i className="devicon-typescript-plain colored text-3xl"></i>
            <p className="text-xs">TypeScript</p>
          </div>
          <div className="skill-container">
            <div className="relative aspect-square h-[36px]">
              <Image src={python} alt="prisma-icon" layout="fill" />
            </div>
            <p className="text-xs">Python</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SkillTitle name="Frontend" />
        <div className="grid grid-cols-3 gap-6 md:grid-cols-4">
          <div className="skill-container">
            <i className="devicon-html5-plain colored text-3xl"></i>
            <p className="text-xs">HTML</p>
          </div>
          <div className="skill-container">
            <i className="devicon-css3-plain colored text-3xl"></i>
            <p className="text-xs">CSS</p>
          </div>
          <div className="skill-container">
            <i className="devicon-react-original colored text-3xl"></i>
            <p className="text-xs">React</p>
          </div>
          <div className="skill-container">
            <i className="devicon-nextjs-original text-4xl"></i>
            <p className="text-xs">Next.js</p>
          </div>
          <div className="skill-container">
            <i className="devicon-tailwindcss-plain colored text-3xl"></i>
            <p className="text-xs">TailwindCSS</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SkillTitle name="Backend" />
        <div className="grid grid-cols-3 gap-6 md:grid-cols-4">
          <div className="skill-container">
            <i className="devicon-nodejs-plain colored text-3xl"></i>
            <p className="text-xs">Node.js</p>
          </div>
          <div className="skill-container">
            <i className="devicon-express-original text-3xl"></i>
            <p className="text-xs">Express</p>
          </div>
          <div className="skill-container">
            <i className="devicon-nestjs-plain colored text-3xl"></i>
            <p className="text-xs">NestJS</p>
          </div>
          <div className="skill-container">
            <i className="devicon-graphql-plain colored text-3xl"></i>
            <p className="text-xs">GraphQL</p>
          </div>
          <div className="skill-container">
            <div className="relative aspect-square h-[36px]">
              <Image src={apollo} alt="apollo-icon" layout="fill" />
            </div>
            <p className="text-xs">Apollo</p>
          </div>
          <div className="skill-container">
            <div className="relative aspect-square h-[36px]">
              <Image src={typegraphql} alt="typegraphql-icon" layout="fill" />
            </div>
            <p className="text-xs">TypeGraphQL</p>
          </div>
          <div className="skill-container">
            <div className="relative aspect-square h-[36px]">
              <Image src={typeorm} alt="typeorm-icon" layout="fill" />
            </div>
            <p className="text-xs">TypeORM</p>
          </div>
          <div className="skill-container">
            <div className="relative aspect-square h-[36px]">
              <Image src={prisma} alt="prisma-icon" layout="fill" />
            </div>
            <p className="text-xs">Prisma</p>
          </div>
          <div className="skill-container">
            <i className="devicon-postgresql-plain colored text-3xl"></i>
            <p className="text-xs">PostgreSQL</p>
          </div>
          <div className="skill-container">
            <i className="devicon-mongodb-plain colored text-3xl"></i>
            <p className="text-xs">MongoDB</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SkillTitle name="Deployment and workflow" />
        <div className="grid grid-cols-3 gap-6 md:grid-cols-4">
          <div className="skill-container">
            <i className="devicon-amazonwebservices-original colored text-3xl"></i>
            <p className="text-xs">AWS EC2</p>
          </div>
          <div className="skill-container">
            <i className="devicon-nginx-original colored text-3xl"></i>
            <p className="text-xs">NGINX</p>
          </div>
          <div className="skill-container">
            <i className="devicon-docker-plain colored text-3xl"></i>
            <p className="text-xs">Docker</p>
          </div>
          <div className="skill-container">
            <i className="devicon-git-plain colored text-3xl"></i>
            <p className="text-xs">Git</p>
          </div>
          <div className="skill-container">
            <i className="devicon-bash-plain text-3xl"></i>
            <p className="text-center text-xs">Command Line</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
