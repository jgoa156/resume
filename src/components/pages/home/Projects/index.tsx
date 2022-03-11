import React from "react";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
	SectionWrapper,
	ItemWrapper,
	Link,
	Item,
	TagWrapper,
	Tag
} from "./components";

export default function Projects() {
	const isMobile = useMediaQuery({
		query: "(max-width: 575px)"
	});

	const imgBaseUrl = `${process.env.img}/components/Projects/`;
	const projects = [
		{
			name: "BB - Investimentos",
			image: "bb-investimentos.jpg",
			description: "Banco do Brasil's landing page for their Investments app which contains all information regarding their platform and their stocks. Developed in 2021.",
			url: "https://www.bb.com.br/uci/investimentos.html",
			tags: [
				"React", "HTML", "CSS", "JS", "Jest", "Jenkins", "Argo CD"
			]
		},
		{
			name: "CREA-AM - Banco de Oportunidades",
			image: "crea-oportunidades.jpg",
			description: "CREA-AM's talent pool application designed with the goal to connect engineers to contractors and to publish engineering related jobs. Developed in 2020.",
			url: "https://oportunidades.crea-am.org.br",
			tags: [
				"React", "Next", "PHP", "Node", "Socket.io", "HTML", "CSS", "JS", "Scrapy", "Python"
			]
		},
		{
			name: "CREA-AM - Main page",
			image: "crea-site.jpg",
			description: "CREA-AM's main institutional landing page which contains all information regarding the council's activities, documents and other platforms. Developed in 2020.",
			url: "https://crea-am.org.br",
			tags: [
				"Wordpress", "PHP", "HTML", "CSS", "JS", "jQuery"
			]
		}
	];

	function ProjectItem({ project }) {
		return (
			<FadeIn>
				<Link href={project.url} target="_blank" rel="noreferrer">
					<Item>
						<img src={`${imgBaseUrl}${project.image}`} />

						<div>
							<div>
								<h4>{project.name}</h4>

								<p>{project.description}</p>
							</div>

							<TagWrapper>
								{project.tags.map((tag, index) => {
									return <Tag key={index}>{tag}</Tag>
								})}
							</TagWrapper>
						</div>
					</Item>
				</Link>
			</FadeIn>
		);
	}

	return (
		<SectionWrapper id="projects">
			<div>
				<FadeIn>
					<Title>Projects</Title>
				</FadeIn>

				<ItemWrapper>
					{projects.map((project, index) => {
						return (
							<ProjectItem key={index} project={project} />
						)
					})}
				</ItemWrapper>
			</div>
		</SectionWrapper>
	);
}