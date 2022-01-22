import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import { useMediaQuery } from "react-responsive";

import { FadeIn, Title } from "components/shared/General";
import {
	SectionWrapper,
	ItemWrapper,
	Item,
	ItemTitle,
	ItemDescription
} from "./components";

export default function WorkExperience() {
	const isMobile = useMediaQuery({
		query: "(max-width: 576px)"
	});
	const jobs = [
		{
			name: "Full Stack Developer",
			type: "Full-time (Remote)",
			company: "Capgemini",
			icon: "img/components/Work/capgemini.png",
			start: "June, 2021",
			end: "Current"
		},
		{
			name: "Full Stack Developer",
			type: "Full-time (Local)",
			company: "CREA-AM",
			icon: "img/components/Work/crea.png",
			start: "May, 2019",
			end: "June, 2021"
		},
		{
			name: "Software Development Intern",
			type: "Internship (Local)",
			company: "PRODAM-AM",
			icon: "img/components/Work/prodam.png",
			start: "June, 2018",
			end: "December, 2018"
		},
	];

	function JobItem({ job }) {
		const [open, setOpen] = useState(false);
		useEffect(() => {
			setOpen(!isMobile);
		}, []);

		return (
			<FadeIn>
				<Item>
					<ItemTitle onClick={() => setOpen(!open)} aria-expanded={open}>
						<img src={job.icon} />

						<div className={"textWrapper"}>
							<h5>{job.name} <i className={`fas fa-chevron-${open ? "up" : "down"}`} /></h5>

							<p>{job.company} <span>{job.type}</span></p>
						</div>
					</ItemTitle>

					<Collapse in={open}>
						<ItemDescription>
							<p className={"details"}>{job.start} - {job.end}</p>
							<p className={"description"}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod posuere velit, sed vehicula sem venenatis at. Pellentesque nec sollicitudin enim. Morbi efficitur, tortor a maximus aliquam, magna tellus finibus nulla, viverra feugiat arcu dolor vitae libero. Sed eu dolor libero. Vestibulum iaculis maximus metus. Vestibulum vestibulum mauris et tortor aliquam mattis. Nunc euismod quam vel quam semper gravida.
							</p>
						</ItemDescription>
					</Collapse>
				</Item>
			</FadeIn>
		);
	}

	return (
		<SectionWrapper id="work-experience">
			<div>
				<FadeIn>
					<Title>Work Experience</Title>
				</FadeIn>

				<ItemWrapper>
					{jobs.map((job, index) => {
						return (
							<JobItem key={index} job={job} />
						)
					})}
				</ItemWrapper>
			</div>
		</SectionWrapper>
	);
}