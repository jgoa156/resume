import React from "react";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Custom
import Banner from "components/pages/Home/Banner";
import Tools from "components/pages/Home/Tools";
import AboutMe from "components/pages/Home/AboutMe";
import WorkExperience from "components/pages/Home/WorkExperience";
import Projects from "components/pages/Home/Projects";
import SkillTree from "components/pages/Home/SkillTree";
import ContactMe from "components/pages/Home/ContactMe";
import SplashScreen from "components/pages/_main/SplashScreen";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["main", 'cv']))
    },
  };
}

export default function Home() {
  const { t, ready } = useTranslation(["main"]);

  const SEO = {
    title: "Guilherme Almeida, Developer",
    description: "Hi, I'm Guilherme Almeida, a 24-year-old Full Stack web and mobile developer and UI/UX designer.",
    url: "https://guilherme.vercel.app",
    image: "/img/SEO/preview-20240624.jpg"
  };

  return (
    <>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        canonical={SEO.url}
        additionalMetaTags={[
          {
            name: "image",
            content: `${SEO.url}${SEO.image}`
          }
        ]}
        openGraph={{
          title: SEO.title,
          description: SEO.description,
          type: "website",
          locale: "en_IE",
          url: SEO.url,
          images: [
            {
              url: `${SEO.url}${SEO.image}`,
              secureUrl: `${SEO.url}${SEO.image}`,
              alt: "Preview Image",
              type: "image/jpeg",
              width: 1295,
              height: 621
            }
          ],
          article: {
            tags: [
              "software developer",
              "software",
              "programmer",
              "dev",
              "developer",
              "designer",
              "fullstack",
              "full-stack",
              "full stack",
              "back-end",
              "back end",
              "front-end",
              "front end",
              "design",
              "brazil",
              "brazilian",
              "remote",
              "worker",

              "javascript",
              "js",
              "java",
              "python",
              "php",
              "cakephp",
              "laravel",
              "springboot",
              "springmvc",
              "spring",
              "designer",
              "ui",
              "ui designer",
              "ux",
              "ux designer",
              "nest",
              "nestjs",
              "next",
              "next.js",
              "nextjs",
              "react",
              "react.js",
              "reactjs",
              "node",
              "node.js",
              "nodejs",
              "express",
              "express.js",
              "expressjs",

              "mysql",
              "sequelize",
              "mongodb",
              "prisma",
              "wordpress",
              "jquery",
              "c",
              "aosp",
              "figma",
              "docker",
              "kubernetes"
            ]
          }
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      {ready ? (
        <>
          <Banner t={t} ready={ready} />
          <Tools t={t} />
          <AboutMe t={t} />
          <WorkExperience t={t} />
          <Projects t={t} />
          <SkillTree t={t} />
          <ContactMe t={t} />
        </>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}