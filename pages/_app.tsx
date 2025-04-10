import nextI18nextConfig from "../next-i18next.config";
import React from "react";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/main.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

function AppWrapper(props) {
  return (
    <App {...props} />
  );
}

function App(props) {
  const router = useRouter();
  const cleanPages = ["/cv"];

  return (
    <section id="app">
      <Head children>
        {/*Meta*/}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <title>Guilherme Almeida, Developer</title>
        <meta
          name="description"
          content="Hi, I'm Guilherme Almeida, a 24-year-old Full Stack web and mobile developer based in Manaus, Brazil."
        />
        <meta
          name="image"
          content="https://jgoa156.vercel.app/img/SEO/preview.jpg"
        />
        {/*Favicon*/}
        <link
          rel="apple-touch-icon"
          href={`${process.env.basePath}/img/logo.png`}
        />
        <link rel="icon" href={`${process.env.basePath}/img/logo.png`} />

        {/*Font Awesome*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        />
      </Head>

      <noscript>You need to turn on JavaScript to see this page</noscript>

      {!cleanPages.includes(router.pathname) && <Header />}

      <main id={"main"} className={"w-100"}>
        <props.Component {...props.pageProps} />
      </main>

      {!cleanPages.includes(router.pathname) && <Footer />}
    </section>
  );
}

export default appWithTranslation(AppWrapper, nextI18nextConfig);