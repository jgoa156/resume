import React from "react";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Atoms/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
	SectionWrapper,
	Card,

	Or,
	QR,

	Link
} from "./components";

export default function ContactMe() {
	const isMobile = useMediaQuery({
		query: "(max-width: 576px)"
	});

	// Links
	const links = [
		{ icon: "fas fa-envelope", href: "mailto:jgoa156@gmail.com" },
		{ icon: "fab fa-whatsapp", href: "https://wa.me/5592984656666" },
		{ icon: "fab fa-linkedin", href: "https://linkedin.com/in/jgoa156" }
	];

	return (
		<SectionWrapper id="contact-me">
			<div>
				<FadeIn style={{ width: "100%" }}>
					<Card>
						<Title>Contact Me</Title>
						<QR src={`${process.env.img}/components/ContactMe/qr.png`}></QR>
						
						<Or><span>or</span></Or>

						<div>
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
						</div>
					</Card>
				</FadeIn>
			</div>
		</SectionWrapper>
	);
}