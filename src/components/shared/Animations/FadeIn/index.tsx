import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import _uniqueId from "lodash/uniqueId";

import { FadeInComponent } from "./components";

export default function FadeIn({ ...props }) {
	const ref = useRef<Element>();
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