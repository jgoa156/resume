import React, { useState, useEffect } from "react";

import {
	HeaderWrapper,
	TitleWrapper,
	LinkWrapper,
	GoToTop
} from "./components";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [showGoToTop, setShowGoToTop] = useState(false);

	const links = [
		{ title: "About Me", href: "about-me" },
		{ title: "Work Experience", href: "work-experience" },
		{ title: "Skills", href: "skills" },
		{ title: "Education", href: "education" },
		{ title: "Contact Me", href: "contacts" },
	];

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrolled(window.scrollY >= 450);
			setShowGoToTop(window.scrollY >= 550);
		});
	}, []);

	return (
		<HeaderWrapper scrolled={scrolled}>
			<nav>
				<TitleWrapper>
					{/*honestamente n sei oq colocar aqui, mas acho q nem precisa*/}
				</TitleWrapper>

				<LinkWrapper>
					{links.map((link, index) => {
						return <a key={index} href={`#${link.href}`}>{link.title}</a>
					})}
				</LinkWrapper>

				<GoToTop href={"#banner"} showGoToTop={showGoToTop} className={"fas fa-arrow-up"}/>
			</nav>
		</HeaderWrapper>
	);
}