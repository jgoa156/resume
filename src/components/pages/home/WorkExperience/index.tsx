import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Atoms/Title";
import FadeIn from "components/shared/Animations/FadeIn";
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
			end: "Current",
			description: <>
				<p>
					Full Stack Developer working alongside several other developers, designers and product managers in order to deliver high end digital solutions for our clients. Our main client in this company is <a target="_blank" rel="noreferrer" href="https://www.bb.com.br/">Banco do Brasil</a>, which is the second largest bank in all Latin America.
				</p>
				<p>
					My main project while working in this company was Banco do Brasil&apos;s <a target="_blank" rel="noreferrer" href="https://www.bb.com.br/uci/investimentos.html">investments page</a>, where I worked mostly as a front-end developer.
				</p>
			</>
		},
		{
			name: "Full Stack Developer",
			type: "Full-time (Local)",
			company: "CREA-AM",
			icon: "img/components/Work/crea.png",
			start: "May, 2019",
			end: "June, 2021",
			description: <>
				<p>
					As a intern, I started working both as an I.T support technician and a developer. The I.T support role consisted mostly of maintenance of computers, servers and printers (one of which was a DataCard printer), while my role as a developer was to create new applications for the company, some of them on demand and most of them which me and my supervisor had designed to automate processes and increase productivity of the whole company.
				</p>
				<p>
					The applications were written in several languages and used several different tools, such as CakePHP, React, Node, and even Scrapy, with the team having full autonomy to choose which tools to use in each project. For my efforts starting the development division in my department, I got hired as a full-time employee.
				</p>
			</>
		},
		{
			name: "Software Development Intern",
			type: "Internship (Local)",
			company: "PRODAM-AM",
			icon: "img/components/Work/prodam.png",
			start: "June, 2018",
			end: "December, 2018",
			description: <>
				<p>
					While working in this company, my main role was to maintain legacy systems written in Java, CakePHP and Laravel, doing tweaks and implementing new features on demand.
				</p>
				<p>
					I also developed tools to automate processes such as mail sending and data mining on excel sheets, most of them which I wrote in Java.
				</p>
			</>
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
							<div>
								<h6>Description</h6>
								{job.description}
							</div>
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