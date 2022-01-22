import React, { ReactDOM, useState, useEffect, useRef } from "react";
import _uniqueId from 'lodash/uniqueId';

import { FadeInComponent, TitleComponent } from "./components";

export function FadeIn({ ...props }) {
	const ref = useRef(Math.random());
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (ref.current) {
				const node = ref.current;
				const body = document.body.getBoundingClientRect();

				const nodeOffsetY = node.getBoundingClientRect().top - body.top;
				const windowOffsetY = window.innerHeight + window.scrollY;

				if (windowOffsetY >= nodeOffsetY) {
					setShow(true);
				}
			}
		});
	}, []);

	return <FadeInComponent ref={ref} show={show} {...props}>
		{props.children}
	</FadeInComponent>
}

export function Title({ ...props }) {
	return <TitleComponent {...props}>
		{props.children}
	</TitleComponent>;
}