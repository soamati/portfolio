import React from "react";
import type { NextPage } from "next";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MainLayout from "@/components/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Nav />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </MainLayout>
  );
};

export default Home;
