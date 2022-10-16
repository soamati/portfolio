import pokebattle from "@public/pokebattle.png";
import chatcito from "@public/chatcito.png";
import sealgo from "@public/sealgo.png";

export interface IProject {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  image: any;
  links: {
    demo: string;
    repo: string;
  };
}

export const projects: IProject[] = [
  {
    title: "PokéBattle 🦄",
    description: "Pokémon based game",
    image: pokebattle,
    features: [
      "User authentication",
      "Buy Pokémons and items",
      "Turn based battle",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "ReactQuery",
      "ChakraUI",
      "Apollo",
      "TypeGraphQL",
      "Prisma",
    ],
    links: {
      demo: "https://pokebattle.fun/",
      repo: "https://github.com/soamati/poke-battle",
    },
  },
  {
    title: "Chatcito 🚀",
    description: "Real time chat app",
    image: chatcito,
    features: ["Google OAuth", "Create rooms", "Add friends", "Chat!"],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "ReactQuery",
      "Mantine UI",
      "NestJS",
      "Passport",
      "Prisma",
    ],
    links: {
      demo: "https://chatcito.fun/",
      repo: "https://github.com/soamati/chatcito",
    },
  },
  {
    title: "Sealgo 🧪",
    image: sealgo,
    description: "Fun sorting algorithm visualizer",
    features: ["Bubble", "Selection", "Insertion", "Merge", "Quick"],
    stack: ["TypeScript", "React", "Vite", "custom hooks", "generators"],
    links: {
      demo: "https://sealgo.vercel.app/",
      repo: "https://github.com/soamati/sealgo",
    },
  },
];
