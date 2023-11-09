import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Title";
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
		query: "(max-width: 575px)"
	});
	const jobs = [
		{
			name: "Front-end Developer",
			type: "Full-time (Remote)",
			company: "Ioasys",
			icon: "img/components/Work/ioasys.png",
			start: "April, 2022",
			end: "February, 2023",
			description: <>
				<p>
					Front-end Developer working alongside other developers, designers and
					managers to modernize companies who wish to get into the digital era.
					Our clients include fintech <a target="_blank" rel="noreferrer" href="https://www.bancointer.com.br/">Banco Inter</a> and
					travel company <a target="_blank" rel="noreferrer" href="https://www.cvc.com.br/">CVC</a>.
				</p>
				<p>
					As a front-end developer, my main projects were CVC&apos;s bus ticket platforms <i>Rodofácil</i> and <i>Rodoviário Exclusivo</i>,
					where I worked mostly with TypeScript, React and Jest. Neither of the platforms are available for public use now and therefore
					can&apos;t be shown on the <a href="#projects">Projects section</a>.
				</p>
			</>
		},
		{
			name: "Full Stack Developer",
			type: "Full-time (Remote)",
			company: "Capgemini",
			icon: "img/components/Work/capgemini.png",
			start: "June, 2021",
			end: "April, 2022",
			description: <>
				<p>
					Full Stack Developer working alongside several other developers,
					designers and product managers in order to deliver high end digital
					solutions for our clients. Our main clients in this company include <a target="_blank" rel="noreferrer" href="https://www.bb.com.br/">Banco do Brasil</a>,
					which is the second largest bank in all Latin America, and other banks such
					as <a target="_blank" rel="noreferrer" href="https://banco.bradesco/">Bradesco</a> and <a target="_blank" rel="noreferrer" href="https://www.itau.com.br/">Itaú</a>.
				</p>
				<p>
					My main project while working in this company was Banco do
					Brasil&apos;s <a target="_blank" rel="noreferrer" href="https://www.bb.com.br/uci/investimentos.html">investments page</a>,
					where I worked mostly as a front-end developer.
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
					As a intern, I started working both as an I.T support technician and a developer. The I.T support
					role consisted mostly of maintenance of computers, servers and printers (one of which was a DataCard printer),
					while my role as a developer was to create new applications for the company, some of them on demand and most of
					them which me and my supervisor had designed to automate processes and increase productivity of the whole company.
				</p>
				<p>
					The applications were written in several languages and used several different tools, such as CakePHP, React,
					Node, and even Scrapy, with the team having full autonomy to choose which tools to use in each project.
					For my efforts starting the development division in my department, I got hired as a full-time employee.
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
					While working in this company, my main role was to maintain legacy systems written in Java,
					CakePHP and Laravel, doing tweaks and implementing new features on demand.
				</p>
				<p>
					I also developed tools to automate processes such as mail sending and data mining on excel
					sheets, most of them which I wrote in Java.
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
