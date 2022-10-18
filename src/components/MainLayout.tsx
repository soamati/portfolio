import React, { PropsWithChildren } from "react";
import { useThemeContext } from "@/context/ThemeProvider";
import Head from "next/head";

const MainLayout = ({ children }: PropsWithChildren) => {
  const { base } = useThemeContext();

  return (
    <>
      <Head>
        <title>Matias Ruiz | Portfolio</title>
      </Head>
      <div className={`min-w-screen bg-${base}`}>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-16 px-2 pb-6 font-roboto text-gray-50">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
