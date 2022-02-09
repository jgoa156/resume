import React from "react";

import Banner from "components/pages/home/Banner";
import Tools from "components/pages/home/Tools";
import AboutMe from "components/pages/home/AboutMe";
import WorkExperience from "components/pages/home/WorkExperience";
import Skills from "components/pages/home/Skills";
import ContactMe from "components/pages/home/ContactMe";

export default function Home() {
	/*const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);*/

	return (
		<>
			<Banner />
			<Tools />
			<AboutMe />
			<WorkExperience />
			<Skills />
			<ContactMe />
		</>
	);
}