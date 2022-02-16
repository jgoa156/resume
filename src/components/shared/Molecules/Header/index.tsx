import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Scrollspy from "react-scrollspy";
import disableScroll from "disable-scroll";

import {
	HeaderWrapper,
	TitleWrapper,
	LinkWrapper,
	GoToTop,

	Burger,
	Sidenav,
	SidenavBackground
} from "./components";

export default function Header() {
	const isMobile = useMediaQuery({
		query: "(max-width: 576px)"
	});
	const [scrolled, setScrolled] = useState(false);
	const [showGoToTop, setShowGoToTop] = useState(false);
	const [showSidenav, setShowSidenav] = useState(false);

	const links = [
		{ title: "Main Tools", href: "main-tools" },
		{ title: "About Me", href: "about-me" },
		{ title: "Work Experience", href: "work-experience" },
		{ title: "Skills", href: "skills" },
		{ title: "Contact Me", href: "contact-me" },
	];

	// Go to top
	const bannerHeight = isMobile ? 450 : 500;
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrolled(window.scrollY >= bannerHeight - 50);
			setShowGoToTop(window.scrollY >= bannerHeight + 50);
		});
	}, []);

	// Lock scroll
	useEffect(() => {
		if (showSidenav) disableScroll.on();
		else disableScroll.off();
	}, [showSidenav]);

	return (
		<HeaderWrapper scrolled={scrolled}>
			<nav>
				<TitleWrapper scrolled={scrolled}>
					Guilherme
				</TitleWrapper>

				{!isMobile
					? (
						<LinkWrapper>
							<Scrollspy items={links.map((link) => link.href)} currentClassName={"spy"} offset={-100}>
								{links.map((link, index) => {
									return <a key={index} href={`#${link.href}`} data-to-scrollspy-id={link.href}>{link.title}</a>
								})}
							</Scrollspy>
						</LinkWrapper>
					)
					: (
						<Burger onClick={() => setShowSidenav(true)} aria-expanded={showSidenav}>
							<i className={"fas fa-bars"} />
						</Burger>
					)
				}

				<GoToTop href={"#banner"} showGoToTop={showGoToTop} className={"fas fa-arrow-up"} />
			</nav>

			{isMobile
				? (<>
					<Sidenav show={showSidenav}>
						<div>
							<div className={"buttonWrapper"}>
								<button
									className={"close"}
									onClick={() => setShowSidenav(false)}>
									<i className={"fas fa-times"} />
								</button>
							</div>

							<LinkWrapper>
								{links.map((link, index) => {
									return <a key={index} href={`#${link.href}`} data-to-scrollspy-id={link.href}>{link.title}</a>
								})}
							</LinkWrapper>
						</div>
					</Sidenav>

					{showSidenav
						? <SidenavBackground onClick={() => setShowSidenav(false)} show={showSidenav} />
						: null
					}
				</>)
				: null
			}
		</HeaderWrapper>
	);
}