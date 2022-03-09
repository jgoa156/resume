import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
	SectionWrapper,
	CardsWrapper,
	SkillCard,
	Skill,

	ButtonsWrapper,
	ButtonLeft,
	ButtonRight
} from "./components";

export default function Skills() {
	const isTablet = useMediaQuery({
		query: "(max-width: 768px)"
	});
	const isMobile = useMediaQuery({
		query: "(max-width: 575px)"
	});
	const [displayScrollLeft, setDisplayScrollLeft] = useState(false);
	const [displayScrollRight, setDisplayScrollRight] = useState(true);

	// Skills object
	const skills = [
		{
			category: "Front-end Development",
			tools: [
				{
					name: "HTML + CSS",
					proficiency: 90,
				},
				{
					name: "React + Next",
					proficiency: 90,
				},
				{
					name: "jQuery",
					proficiency: 80,
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
					proficiency: 70,
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
					name: "Illustrator + Photoshop",
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
					name: "Wordpress + Plugins",
					proficiency: 50,
				}
			]
		}
	];

	// Slider
	const skillsRef = useRef<any>(null);
	const cardWidth = isTablet ? 330 : 380;
	function cardsInViewport() {
		return Math.floor(window.innerWidth / cardWidth);
	}

	function slideLeft() {
		skillsRef.current.scrollLeft -= cardsInViewport() * cardWidth;
	}
	function slideRight() {
		skillsRef.current.scrollLeft += cardsInViewport() * cardWidth;
	}
	useEffect(() => {
		if (skillsRef && skillsRef.current) {
			skillsRef.current.addEventListener("scroll", function () {
				const windowWidth = window.innerWidth;
				const scroll = windowWidth + skillsRef.current.scrollLeft;
				const width = skillsRef.current.scrollWidth;

				setDisplayScrollLeft(scroll > windowWidth);
				setDisplayScrollRight(scroll < width);
			});
		}
	}, [])

	return (
		<SectionWrapper id="skills">
			<div>
				<FadeIn>
					<Title>Skills</Title>
				</FadeIn>

				<FadeIn>
					<CardsWrapper ref={skillsRef}>
						<div>
							{skills.map((skill, index) => {
								return (
									<SkillCard key={index}>
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
						</div>
					</CardsWrapper>
				</FadeIn>

				{!isMobile
					? (
						<ButtonsWrapper>
							{displayScrollLeft
								? <ButtonLeft onClick={() => slideLeft()}><i className={"fas fa-chevron-left"} /></ButtonLeft>
								: null
							}
							{displayScrollRight
								? <ButtonRight onClick={() => slideRight()}><i className={"fas fa-chevron-right"} /></ButtonRight>
								: null
							}
						</ButtonsWrapper>
					)
					: null
				}
			</div>
		</SectionWrapper>
	);
}