import React from "react";

import { TitleComponent } from "./styles";

export default function Title({ ...props }) {
	return <TitleComponent {...props}>
		{props.children}
	</TitleComponent>;
}