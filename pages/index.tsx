import React from "react";
import { NextSeo } from "next-seo";

import Banner from "components/pages/home/Banner";
import Tools from "components/pages/home/Tools";
import AboutMe from "components/pages/home/AboutMe";
import WorkExperience from "components/pages/home/WorkExperience";
import Skills from "components/pages/home/Skills";
import ContactMe from "components/pages/home/ContactMe";

export default function Home() {
	return (
		<>
			<NextSeo
				title="Guilherme Almeida, Developer"
				description="Hi, I'm Guilherme Almeida, a 21-year-old Full-stack web and mobile developer based in Manaus, Brazil."
				canonical="https://guilherme.vercel.app/"
				openGraph={{
					title: "Guilherme Almeida, Developer",
					description: "Hi, I'm Guilherme Almeida, a 21-year-old Full-stack web and mobile developer based in Manaus, Brazil.",
					type: "website",
					locale: "en_IE",
					url: "https://guilherme.vercel.app/",
					images: [
						{
							url: "https://guilherme.vercel.app/img/SEO/preview.jpg",
							alt: "Preview Image",
							type: "image/jpeg",
							width: 656,
							height: 370
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
							"spring",
							"designer",
							"ui",
							"ui designer",
							"ux",
							"ux designer",
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

			<Banner />
			<Tools />
			<AboutMe />
			<WorkExperience />
			<Skills />
			<ContactMe />
		</>
	);
}