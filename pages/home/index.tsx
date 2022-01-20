import React from "react";

import Banner from "components/pages/home/Banner";
import Tools from "components/pages/home/Tools";
import AboutMe from "components/pages/home/AboutMe";
import WorkExperience from "components/pages/home/WorkExperience";
import Skills from "components/pages/home/Skills";

export default function Home() {
	return (
		<>
			<Banner />
			<Tools />
			<AboutMe />
			<WorkExperience />
			<Skills />
		</>
	);
}