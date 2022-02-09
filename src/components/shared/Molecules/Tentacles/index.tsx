import React from "react";

import {
	TentaclesWrapper
} from "./components";
import { BackgroundTentacles } from "components/shared/Atoms/Icons";

export default function Tentacles() {
	return (
		<TentaclesWrapper>
			<div>
				<BackgroundTentacles className={"tentacles"}/>
			</div>
		</TentaclesWrapper>
	);
}