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

	const imgBaseUrl = "/img/components/projects/";
	const projects = [
		{
			name: "BB - Investimentos",
			image: "bb-investimentos.jpg",
			url: "https://www.bb.com.br/uci/investimentos.html",
			tags: [
				"React", "HTML", "CSS", "JS", "Jest", "Jenkins", "Argo CD"
			]
		},
		{
			name: "CREA-AM - Oportunidades",
			image: "crea-oportunidades.jpg",
			url: "https://oportunidades.crea-am.org.br",
			tags: [
				"React", "Next", "PHP", "Node", "Socket.io", "HTML", "CSS", "JS", "Scrapy", "Python"
			]
		},
		{
			name: "CREA-AM - Main page",
			image: "crea-site.jpg",
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
							<h4>{project.name}</h4>

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