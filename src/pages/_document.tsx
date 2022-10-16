import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* eslint-disable-next-line */}
        <title>Matias Ruiz | Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
