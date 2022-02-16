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
				canonical="https://jgoa156.vercel.app/"
				openGraph={{
					title: "Guilherme Almeida, Developer",
					description: "Hi, I'm Guilherme Almeida, a 21-year-old Full-stack web and mobile developer based in Manaus, Brazil.",
					type: "website",
					locale: "en_IE",
					url: "https://jgoa156.vercel.app/",
					images: [
						{
							url: "/img/SEO/preview.jpg",
							alt: "Preview Image",
							type: "image/jpeg"
						}
					]
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