import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import {
	SectionWrapper,

	BackgroundWrapper,
	Background,
	Profile,

	Intro,
	AnimatedTitle,

	Links,
	Download,
	Link
} from "./components";

export default function Banner() {
	const [parallaxY, setParallaxY] = useState("50%");
	const isTablet = useMediaQuery({
		query: "(max-width: 1024px)"
	});

	const bannerHeight = isTablet ? 400 : 500;
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY <= bannerHeight) {
				let y = (window.scrollY / bannerHeight) * 100;
				setParallaxY(`calc(50% - ${y / 2}%)`);
			}
		});
	}, []);

	// Text animation
	const [role, setRole] = useState("");
	const [charIndex, setCharIndex] = useState(0);
	const [roleIndex, setRoleIndex] = useState(0);
	const roles = ["Software Engineer", "Front-End Developer", "Back-End Developer", "Designer"];

	useEffect(() => {
		// Alterando para a próxima palavra
		if (charIndex == (roles[roleIndex].length + 1) * -1) {
			setTimeout(() => {
				setRoleIndex(roleIndex == roles.length - 1 ? 0 : roleIndex + 1);
				setRole("");
				setCharIndex(0);
			}, 500);
			// Apagando palavra
		} else if (charIndex < 0) {
			setTimeout(() => {
				setRole(role.slice(0, -1));
				setCharIndex(charIndex - 1);
			}, 10);
			// Escrevendo palavra
		} else if (charIndex < roles[roleIndex].length) {
			setTimeout(() => {
				setRole(role + roles[roleIndex][charIndex])
				setCharIndex(charIndex + 1);
			}, 30);
			// Aguardando 1.5s e dando ordem para apagar palavra
		} else {
			setTimeout(() => {
				setCharIndex(-1);
			}, 1500);
		}
	}, [charIndex]);

	// Links
	const links = [
		{ icon: "fas fa-envelope", href: "mailto:jgoa156@gmail.com" },
		{ icon: "fab fa-github", href: "https://github.com/jgoa156" },
		{ icon: "fab fa-whatsapp", href: "https://wa.me/5592984656666" },
		{ icon: "fab fa-linkedin", href: "https://linkedin.com/in/jgoa156" }
	];

	return (
		<SectionWrapper id="banner">
			<BackgroundWrapper>
				<Background parallaxY={parallaxY} src={`${process.env.img}/components/Banner/bg.jpg`} />
				<div>
					<Profile src={`${process.env.img}/components/Banner/profile.jpg`} />
				</div>
			</BackgroundWrapper>

			<div>
				<Intro>
					<h1>
						Hi, I&apos;m Guilherme,
						<br />
						a&nbsp;<AnimatedTitle>{role}</AnimatedTitle>
					</h1>

					<Links>
						{links.map((link, index) => {
							return (
								<Link
									key={index}
									target="_blank"
									rel="noreferrer"
									href={link.href}>
									<i className={link.icon} />
								</Link>
							);
						})}
					</Links>

					<Download href={"/files/Guilherme Almeida - CV.pdf"} download={"Guilherme Almeida - CV"}>
						<button>
							<i className={"fas fa-file-download"} /> Download CV
						</button>
					</Download>
				</Intro>
			</div>
		</SectionWrapper>
	);
}