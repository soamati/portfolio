import React from "react";
import type { NextPage } from "next";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import AppContainer from "@/components/AppContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matias Ruiz | Portfolio</title>
      </Head>
      <AppContainer>
        <Nav />
        <Intro />
        <Skills />
        <Projects />
        <Footer />
      </AppContainer>
    </>
  );
};

export default Home;
