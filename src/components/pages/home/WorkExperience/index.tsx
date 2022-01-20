import React, { useState, useEffect } from "react";

import { Title } from "components/shared/General";
import { SectionWrapper, ItemWrapper, Item } from "./components";

export default function WorkExperience() {
	const companies = [
		{
			title: "PRODAM",
			icon: "img/components/Work/prodam.png"
		},
		{
			title: "CREA-AM",
			icon: "img/components/Work/crea.png"
		},
		{
			title: "Capgemini",
			icon: "img/components/Work/capgemini.png"
		}
	];

	return (
		<SectionWrapper id="work-experience">
			<div>
				<Title>Work Experience</Title>
				<ItemWrapper>
					{companies.map((company, index) => {
						return (
							<Item key={index}>
								<img src={company.icon}/>
							</Item>
						)
					})}
				</ItemWrapper>
			</div>
		</SectionWrapper>
	);
}