import React from "react";

import Title from "components/shared/Atoms/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import { SectionWrapper, ItemWrapper, Item } from "./components";
import * as Icons from "components/shared/Atoms/Icons";

export default function Tools() {
	const tools = [
		/*{ title: "HTML 5", icon: <Icons.IconHTML/>, color: "#ff6614" },
		{ title: "CSS 3", icon: <Icons.IconCSS/>, color: "#00ade5" },
		{ title: "JavaScript", icon: <Icons.IconJS/>, color: "#f7f418" },
		{ title: "Java", icon: <Icons.IconJava/>, color: "#ea2a37" },
		{ title: "PHP", icon: <Icons.IconPHP/>, color: "#8993c1" },
		{ title: "Python 3", icon: <Icons.IconPython/>, color: "#fbd35a", direction: "bottom" },
		{ title: "C", icon: <Icons.IconC/>, color: "#3946ac", direction: "bottom" }*/
		{ title: "React.JS and React Native", icon: <Icons.IconReact />, color: "#61dbfb", direction: "bottom" },
		{ title: "Next.JS", icon: <Icons.IconNext />, color: "#4a5563", direction: "bottom" },
		{ title: "Node.JS", icon: <Icons.IconNode />, color: "#539e43", direction: "bottom" },
		{ title: "Express.JS", icon: <Icons.IconExpress />, color: "#787878", direction: "bottom" },
		{ title: "Jest", icon: <Icons.IconJest />, color: "#9a405b", direction: "bottom" },
		{ title: "MySQL", icon: <Icons.IconMySQL />, color: "#5382a1", direction: "bottom" },

	];

	return (
		<SectionWrapper id="main-tools">
			<div>
				<Title show={true}>Main tools</Title>

				<FadeIn>
					<ItemWrapper>
						{tools.map((tool, index) => {
							return (
								<Item key={index} color={tool.color} direction={tool.direction ? tool.direction : ""}>
									{tool.icon}
									<label>{tool.title}</label>
								</Item>
							)
						})}
					</ItemWrapper>
				</FadeIn>
			</div>
		</SectionWrapper>
	);
}