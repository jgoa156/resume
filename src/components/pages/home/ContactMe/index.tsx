import React from "react";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Title";
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
		query: "(max-width: 575px)"
	});

	// Links
	const links = [
		{ icon: "fas fa-envelope", href: "mailto:jgoa156@gmail.com", content: "jgoa156@gmail.com" },
		{ icon: "fab fa-whatsapp", href: "https://wa.me/5592984656666", content: "+55 92 98465-6666" },
		{ icon: "fab fa-linkedin", href: "https://linkedin.com/in/jgoa156", content: "jgoa156" }
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
									<Link key={index}>
										<a
											target="_blank"
											rel="noreferrer"
											href={link.href}>
											<i className={link.icon} />
										</a>
										<span>{link.content}</span>
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