import React, { useState, useEffect } from "react";

import { Title } from "components/shared/General";
import {
	SectionWrapper,
	CardsWrapper,
	SkillCard,
	Skill
} from "./components";

export default function Skills() {
	const skills = [
		{
			category: "Front-end Development",
			tools: [
				{
					name: "HTML + CSS",
					proficiency: 100,
				},
				{
					name: "React + Next",
					proficiency: 100,
				},
				{
					name: "jQuery",
					proficiency: 100,
				},
			]
		},
		{
			category: "Back-end Development",
			tools: [
				{
					name: "Node + Express",
					proficiency: 90,
				},
				{
					name: "PHP",
					proficiency: 80,
				},
				{
					name: "Java + Spring",
					proficiency: 60,
				}
			]
		},
		{
			category: "Mobile development",
			tools: [
				{
					name: "React Native",
					proficiency: 70,
				},
				{
					name: "Java/Kotlin Android",
					proficiency: 40,
				}
			]
		},
		{
			category: "Design and Design Tools",
			tools: [
				{
					name: "Adobe Illustrator + Photoshop",
					proficiency: 90,
				},
				{
					name: "Figma",
					proficiency: 80,
				},
				{
					name: "UI/UX Design",
					proficiency: 60,
				}
			]
		},
		{
			category: "Dev Ops",
			tools: [
				{
					name: "Argo CD",
					proficiency: 30,
				},
				{
					name: "Jenkins",
					proficiency: 30,
				},
				{
					name: "Kubernetes",
					proficiency: 20,
				},
			]
		},
		{
			category: "Desktop and Embedded development",
			tools: [
				{
					name: "Python",
					proficiency: 90,
				},
				{
					name: "Java",
					proficiency: 80,
				},
				{
					name: "C",
					proficiency: 70,
				},
				{
					name: "AOSP",
					proficiency: 20,
				}
			]
		},
		{
			category: "Languages",
			tools: [
				{
					name: "Portuguese",
					proficiency: 100,
				},
				{
					name: "English",
					proficiency: 100,
				},
				{
					name: "Spanish",
					proficiency: 40,
				}
			]
		},
		{
			category: "Others",
			tools: [
				{
					name: "Agile Methodologies",
					proficiency: 80,
				},
				{
					name: "Wordpress + Plugin development",
					proficiency: 60,
				}
			]
		}
	];

	return (
		<SectionWrapper id="skills">
			<div>
				<Title>Skills</Title>
				<CardsWrapper>
					{skills.map((skill, index) => {
						return (
							<SkillCard key={index}>
								<div className={"kek"}></div>
								<h5>{skill.category}</h5>

								<div>
									{skill.tools.map((tool, index) => {
										return (
											<Skill key={index} proficiency={tool.proficiency}>
												<div>
													<label>{tool.name}</label>
													<span>{tool.proficiency}%</span>
												</div>
											</Skill>
										);
									})}
								</div>
							</SkillCard>
						);
					})}
				</CardsWrapper>
			</div>
		</SectionWrapper>
	);
}